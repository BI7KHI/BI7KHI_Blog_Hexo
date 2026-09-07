---
title: AndroidStudio启动崩溃修复流程
tags: [Ubuntu, AndroidStudio, 虚拟机]
mathjax: true
date: 2026-09-07 23:49:11
categories: 技术
cover: /images/AndroidStudio/cover.png
---

> 好久没写博客了

---

> 适用场景：Ubuntu 主机 + Android Studio 自带 SDK 的 Android 模拟器（Emulator）启动后闪退、无响应或被自动关闭，日志出现 `Emulator terminated with exit code 139`。
>
> 本文完整记录一次真实故障的排查、修复、持久化方法，以及把 Android Studio 加入系统 PATH 的配置方法

---

## 1. 故障现象

在 Android Studio 中点击运行虚拟机后，控制台/日志出现以下信息：

```text
WARNING - Emulator: Medium Phone - detected a hanging thread 'QEMU2 CPU0 thread'. No response for 19668 ms
WARNING - Emulator: Medium Phone - detected a hanging thread 'QEMU2 CPU1 thread'. No response for 19668 ms
WARNING - Emulator: Medium Phone - detected a hanging thread 'QEMU2 main loop'. No response for 15000 ms
WARNING - Emulator: Medium Phone - Emulator terminated with exit code 139
WARNING - #com.android.sdklib.deviceprovisioner.DeviceAction - The emulator process for AVD Medium_Phone has terminated.
```

## 2. 环境信息


| 项目          | 值                                          |
| --------------- | --------------------------------------------- |
| 主机系统      | Ubuntu 24.04（内核 6.17.0-23-generic）      |
| Emulator 版本 | 37.1.11.0                                   |
| AVD 名称      | Medium_Phone                                |
| 系统镜像      | android-34 / google_apis_playstore / x86_64 |

---

## 3. 根因分析

### 3.1 基础排查

KVM、内存、磁盘均正常：

```bash
ls -l /dev/kvm
getfacl /dev/kvm
~/Android/Sdk/emulator/emulator -accel-check
```

```text
KVM (version 12) is installed and usable.
```

### 3.2 发现 GPU 模式是罪魁祸首

查看 AVD 配置：

```bash
grep -n 'hw.gpu' ~/.android/avd/Medium_Phone.avd/config.ini
grep -n 'hw.gpu' ~/.android/avd/Medium_Phone.avd/hardware-qemu.ini
```

原始状态：

```ini
# config.ini
hw.gpu.enabled=yes
hw.gpu.mode=software
```

实际生效时会变成：

```ini
# hardware-qemu.ini（emulator 生成）
hw.gpu.mode = lavapipe
```

**Android Emulator 37.x 会把 `software` 解析为 `lavapipe（Vulkan 软件渲染）`，该渲染路径在本机导致 QEMU2 段错误退出，即 `exit code 139`。**

### 3.3 为什么只改 config.ini 不够？

把 `config.ini` 手动改为 `swiftshader_indirect` 后，**命令行直接启动 emulator 可以成功**，但从 Android Studio 启动仍然失败。

原因是：**Android Studio 每次打开/启动 AVD 时会把 `config.ini` 的 `hw.gpu.mode` 覆盖回 `auto`**，最终又生成 `lavapipe`，重新触发崩溃。

因此需要更彻底的持久化方案：**在 emulator 入口强制注入 `-gpu swiftshader_indirect` 参数**，让 Android Studio 无论怎么写 config.ini 都无法绕过。

---

## 4. 修复方案

### 4.1 方法一：修改 AVD GPU 配置（基础修复）

```bash
# 备份
cp ~/.android/avd/Medium_Phone.avd/config.ini \
   ~/.android/avd/Medium_Phone.avd/config.ini.bak

# 修改
sed -i 's/^hw.gpu.mode=.*/hw.gpu.mode=swiftshader_indirect/' \
  ~/.android/avd/Medium_Phone.avd/config.ini

# 确认
grep -n 'hw.gpu' ~/.android/avd/Medium_Phone.avd/config.ini
```

### 4.2 方法二：Emulator 双包装器（持久化核心修复）

Android Studio 调用模拟器时存在两种入口：

```bash
~/Android/Sdk/emulator/emulator
~/Android/Sdk/emulator/emulator.bin   # Android Studio 实际使用
```

一开始只在 `emulator` 入口加了包装器，但 Android Studio 仍直接调用 `emulator.bin`，导致包装器被绕过并再次崩溃。

因此需要 **三重文件结构**，保证两个入口都强制注入：

- ```bash
  -feature -Vulkan -gpu swiftshader_indirect
  ```
- `-gpu swiftshader_indirect`：使用 SwiftShader 软件渲染，避免 lavapipe 崩溃。
- `-feature -Vulkan`：显式禁用 Vulkan。实测仅 SwiftShader 仍可能偶发走 Vulkan 后端导致 QEMU2 死锁，禁用 Vulkan 后启动更稳定。
- 包装器在启动前还要 **实时恢复 AVD 配置**：Android Studio GUI 启动时可能把 `hw.gpu.mode` 改成 `auto` 或 `off`，导致 emulator 回退 `lavapipe` 崩溃，所以必须在真正调用 emulator 前把配置改回 `swiftshader_indirect`。

```
Android/Sdk/emulator/
├── emulator          # 包装器 A
├── emulator.bin      # 包装器 B（防止 Studio 使用该路径时绕过）
└── emulator.real     # 真正的原始 emulator 二进制
```

#### 操作步骤

1. 把原始二进制统一保留为 `emulator.real`：

   ```bash
   mv ~/Android/Sdk/emulator/emulator.bin \
      ~/Android/Sdk/emulator/emulator.real
   ```
2. 创建包装器 `emulator`：

   ```bash
   cat > ~/Android/Sdk/emulator/emulator << 'EOF'
   #!/bin/bash
   # Wrapper: fix display env, restore AVD GPU config, then force SwiftShader and disable Vulkan.
   export DISPLAY=${DISPLAY:-:0}
   export XDG_RUNTIME_DIR=${XDG_RUNTIME_DIR:-/run/user/$(id -u)}
   export XAUTHORITY=${XAUTHORITY:-$XDG_RUNTIME_DIR/gdm/Xauthority}
   unset WAYLAND_DISPLAY 2>/dev/null || true
   export QT_QPA_PLATFORM=xcb
   sed -i 's/^hw.gpu.mode=.*/hw.gpu.mode=swiftshader_indirect/' "${HOME}/.android/avd/Medium_Phone.avd/config.ini"
   exec "${HOME}/Android/Sdk/emulator/emulator.real" "$@" -feature -Vulkan -gpu swiftshader_indirect
   EOF
   chmod +x ~/Android/Sdk/emulator/emulator
   ```
3. 创建包装器 `emulator.bin`：

   ```bash
   cat > ~/Android/Sdk/emulator/emulator.bin << 'EOF'
   #!/bin/bash
   # Secondary wrapper: fix display env, restore AVD GPU config, force SwiftShader and disable Vulkan.
   export DISPLAY=${DISPLAY:-:0}
   export XDG_RUNTIME_DIR=${XDG_RUNTIME_DIR:-/run/user/$(id -u)}
   export XAUTHORITY=${XAUTHORITY:-$XDG_RUNTIME_DIR/gdm/Xauthority}
   unset WAYLAND_DISPLAY 2>/dev/null || true
   export QT_QPA_PLATFORM=xcb
   sed -i 's/^hw.gpu.mode=.*/hw.gpu.mode=swiftshader_indirect/' "${HOME}/.android/avd/Medium_Phone.avd/config.ini"
   exec "${HOME}/Android/Sdk/emulator/emulator.real" "$@" -feature -Vulkan -gpu swiftshader_indirect
   EOF
   chmod +x ~/Android/Sdk/emulator/emulator.bin
   ```
4. 验证两个入口：

   ```bash
   ~/Android/Sdk/emulator/emulator -version
   ~/Android/Sdk/emulator/emulator.bin -version
   ```

### 4.3 方法三：创建持久化自动修复脚本

为了防止 SDK Manager 以后更新 emulator 时把包装器覆盖掉，创建一个自动修复脚本：

`~/bin/fix-android-emulator-gpu.sh`

```bash
#!/bin/bash
# Persist the Android Emulator SwiftShader GPU fix.
# Keeps emulator and emulator.bin as wrappers around the real binary emulator.real.
REAL="${HOME}/Android/Sdk/emulator/emulator.real"
EMU="${HOME}/Android/Sdk/emulator/emulator"
EMU_BIN="${HOME}/Android/Sdk/emulator/emulator.bin"
AVD_CONFIG="${HOME}/.android/avd/Medium_Phone.avd/config.ini"

# If the real binary is missing, recover it from whichever original binary still exists.
if [ ! -f "$REAL" ]; then
  if [ -f "$EMU_BIN" ] && ! grep -q 'swiftshader_indirect' "$EMU_BIN" 2>/dev/null; then
    mv "$EMU_BIN" "$REAL"
  elif [ -f "$EMU" ] && ! grep -q 'swiftshader_indirect' "$EMU" 2>/dev/null; then
    mv "$EMU" "$REAL"
  fi
fi

# Recreate emulator wrapper if needed.
if [ ! -f "$EMU" ] || ! grep -q 'swiftshader_indirect' "$EMU" 2>/dev/null; then
  cat > "$EMU" << 'W1'
#!/bin/bash
# Wrapper: fix display env, restore AVD GPU config, force SwiftShader and disable Vulkan.
export DISPLAY=${DISPLAY:-:0}
export XDG_RUNTIME_DIR=${XDG_RUNTIME_DIR:-/run/user/$(id -u)}
export XAUTHORITY=${XAUTHORITY:-$XDG_RUNTIME_DIR/gdm/Xauthority}
unset WAYLAND_DISPLAY 2>/dev/null || true
export QT_QPA_PLATFORM=xcb
sed -i 's/^hw.gpu.mode=.*/hw.gpu.mode=swiftshader_indirect/' "${HOME}/.android/avd/Medium_Phone.avd/config.ini"
exec "${HOME}/Android/Sdk/emulator/emulator.real" "$@" -feature -Vulkan -gpu swiftshader_indirect
W1
  chmod +x "$EMU"
fi

# Recreate emulator.bin wrapper if needed (Android Studio may resolve to this path).
if [ ! -f "$EMU_BIN" ] || ! grep -q 'swiftshader_indirect' "$EMU_BIN" 2>/dev/null; then
  cat > "$EMU_BIN" << 'W2'
#!/bin/bash
# Secondary wrapper: fix display env, restore AVD GPU config, force SwiftShader and disable Vulkan.
export DISPLAY=${DISPLAY:-:0}
export XDG_RUNTIME_DIR=${XDG_RUNTIME_DIR:-/run/user/$(id -u)}
export XAUTHORITY=${XAUTHORITY:-$XDG_RUNTIME_DIR/gdm/Xauthority}
unset WAYLAND_DISPLAY 2>/dev/null || true
export QT_QPA_PLATFORM=xcb
sed -i 's/^hw.gpu.mode=.*/hw.gpu.mode=swiftshader_indirect/' "${HOME}/.android/avd/Medium_Phone.avd/config.ini"
exec "${HOME}/Android/Sdk/emulator/emulator.real" "$@" -feature -Vulkan -gpu swiftshader_indirect
W2
  chmod +x "$EMU_BIN"
fi

sed -i 's/^hw.gpu.mode=.*/hw.gpu.mode=swiftshader_indirect/' "$AVD_CONFIG" 2>/dev/null || true
exit 0
```

给予执行权限，并把脚本加入 `~/.bashrc`，每次登录自动检查修复：

```bash
chmod +x ~/bin/fix-android-emulator-gpu.sh
echo '~/bin/fix-android-emulator-gpu.sh >/dev/null 2>&1' >> ~/.bashrc
```

---

## 5. 验证结果

### 5.1 命令行验证（模拟 Android Studio 调用）

分别模拟 Android Studio GUI 的两种覆盖方式（`auto` 和 `off`），再通过包装器启动：

```bash
cd ~/Android/Sdk/emulator

# 模拟 Studio 把 GPU 配置覆盖成 auto
sed -i 's/^hw.gpu.mode=.*/hw.gpu.mode=auto/' ~/.android/avd/Medium_Phone.avd/config.ini
./emulator -netdelay none -netspeed full -avd Medium_Phone

# 模拟 Studio 把 GPU 配置覆盖成 off（此前导致回退 lavapipe 并崩溃）
sed -i 's/^hw.gpu.mode=.*/hw.gpu.mode=off/' ~/.android/avd/Medium_Phone.avd/config.ini
./emulator -netdelay none -netspeed full -avd Medium_Phone
```

包装器会在启动前把 `config.ini` 实时恢复为 `swiftshader_indirect`：

```text
# 启动前 config.ini 被包装器自动改回：
hw.gpu.mode=swiftshader_indirect
```

两个入口最终看到的实际进程参数都是：

```text
qemu-system-x86_64 -netdelay none -netspeed full -avd Medium_Phone -feature -Vulkan -gpu swiftshader_indirect
```

日志关键行：

```text
INFO | Feature 'Vulkan' (21) is overridden to 'disabled'
INFO | GPU Renderer=[Android Emulator OpenGL ES Translator (Google SwiftShader)]
INFO | Created extended window in 550.905ms / 574.746ms / 596.191ms
INFO | Boot completed in 85873 ms / ...
```

adb 检查：

```bash
~/Android/Sdk/platform-tools/adb devices
# emulator-5554  device

~/Android/Sdk/platform-tools/adb -s emulator-5554 shell getprop sys.boot_completed
# 1
```

### 5.2 验证结论


| 验证项                                                             | 结果                                           |
| -------------------------------------------------------------------- | ------------------------------------------------ |
| KVM 加速                                                           | ✅ 正常                                        |
| 原`software/lavapipe` 启动                                         | ❌ exit code 139                               |
| 改`swiftshader_indirect` 命令行启动                                | ✅ 正常                                        |
| **从 Android Studio 同路径调用 + config 被覆盖为 auto**            | ✅ 包装器实时恢复并强制 SwiftShader，正常启动  |
| **从 Android Studio 同路径调用 + config 被覆盖为 off（关键场景）** | ✅ 包装器实时恢复，不再回退 lavapipe，正常启动 |
| **直接调用 `emulator.bin`（Studio 实际解析到的路径）**             | ✅ 仍被包装器强制为 SwiftShader，正常启动      |
| **禁用 Vulkan（`-feature -Vulkan`）后启动**                        | ✅ 更稳定，无 QEMU2 死锁/exit 139              |
| **Android Studio GUI 实际点击启动（Device Manager 播放按钮）**     | ✅ 成功启动，窗口创建正常，无 exit 139         |
| 快照快速启动                                                       | ✅ 成功加载`default_boot`                      |
| `adb devices`                                                      | ✅ emulator-5554 device                        |
| `sys.boot_completed`                                               | ✅ 1                                           |

---

## 6. 本次实际修复成果

### 6.1 文件变更


| 文件                                             | 变更                                                    |
| -------------------------------------------------- | --------------------------------------------------------- |
| `~/Android/Sdk/emulator/emulator.real`           | 真正的原始 emulator 二进制                              |
| `~/Android/Sdk/emulator/emulator`                | 强制`swiftshader_indirect + 禁用 Vulkan` 的 bash 包装器 |
| `~/Android/Sdk/emulator/emulator.bin`            | 第二包装器，防止 Studio 调用该路径时绕过                |
| `~/.android/avd/Medium_Phone.avd/config.ini`     | `hw.gpu.mode=swiftshader_indirect`                      |
| `~/.android/avd/Medium_Phone.avd/config.ini.bak` | 原始 AVD 配置备份                                       |
| `~/bin/fix-android-emulator-gpu.sh`              | 持久化自动修复脚本                                      |
| `~/.bashrc`                                      | Android Studio 环境变量 + 自动修复脚本                  |
| `/etc/profile.d/android-studio.sh`               | 系统级 Android Studio 环境变量                          |

### 6.2 当前使用方式

1. 在 Android Studio 中再次点击启动 `Medium_Phone` 虚拟设备即可。
2. 如果以后 SDK Manager 更新了 emulator，登录终端时会自动重建包装器，无需手动重复修复。

---

## 7. 注意事项

1. `swiftshader_indirect` 是纯软件渲染，兼容性最好，但性能低于硬件 GPU。若以后显卡驱动正常，可尝试 `hw.gpu.mode=host` 或 `auto` 提升性能。
2. 不要删除 `emulator.real`，它是真正的原始二进制，`emulator` 和 `emulator.bin` 两个包装器都会调用它。
3. 若 Android Studio 正在运行，修改完成后建议重新点击启动虚拟设备；更稳妥可完全退出 Studio 再重新打开。
4. 修改 AVD 编辑器或启动虚拟设备时，Studio 可能把 `hw.gpu.mode` 改回 `auto` 甚至 `off`，但包装器会在每次启动 emulator 前实时把配置恢复为 `swiftshader_indirect`，因此启动不会受影响。
5. `-feature -Vulkan` 会禁用 Vulkan 特性。首次切换后旧快照可能因 feature 不兼容而无法加载，会自动冷启动一次；正常关闭后会保存新的兼容快照，后续可快速启动。
6. 系统 PATH 中的 `/opt/android-studio/bin` 被同时加入 `/etc/profile.d` 和 `~/.bashrc`，重复不影响使用。

---

## 8. 总结

> Android Emulator 37.x 的 `software` GPU 模式实际映射为 lavapipe（Vulkan 软件渲染），在本机导致 QEMU2 段错误（exit 139）；且 Android Studio 会把 AVD 的 GPU 模式覆盖回 `auto`。
>
> 最终修复：通过 `emulator` 与 `emulator.bin` 双包装器强制 `-feature -Vulkan -gpu swiftshader_indirect`，覆盖 Android Studio 实际使用 `emulator.bin` 启动的情况，使其无论怎样修改 AVD 配置都不会再走 lavapipe/Vulkan 崩溃路径；同时把 Android Studio 加入系统 PATH 和 `studio` 全局命令，实现任意位置启动。
