---
title: Git代理问题与解决方案分享
date: 2025-10-19 02:32:06
tags: [Git,Github,代理网络,VPN]
categories: [技术]
cover: https://ts2.tc.mm.bing.net/th/id/OIP-C.POT_UqJFZBZWYwoWQoS6mwHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3
---
# Git代理问题与解决方案分享

在使用VSCode进行Git操作时，可能会遇到代理网络问题，导致无法正常连接到Github等远程仓库。本文将分享一些常见的Git代理问题及其解决方案，帮助开发者顺利进行版本控制。

## 问题描述

当开发者在使用VSCode进行Git操作时，可能会遇到以下问题：

- 无法连接到Github等远程仓库
- 推送或拉取代码时出现超时或错误

具体表现为

```powershell
Git: fatal: unable to access'https:/aithub.com/BI7KHIHAM operationTechnicalverification,git/: Failed to connect togithub.com port 443 after 132917 ms: couldn't connect to server
```

诸如此类Github等远程仓库连接问题

```

```

## 原因分析

由于国内网络环境的限制，直接访问Github并进行远程仓库操作可能会遇到连接超时或失败的问题。
所以我们通常需要使用代理来进行Github远程仓库的访问
当时在配置好代理（例如Clash等）后，虽然网页能够正常访问Github，但是在使用VSCode进行Git操作时，仍然会遇到连接问题。
这通常是因为Git默认不使用系统代理，需要手动配置才能使Git操作通过代理进行。

## 解决方法

使用如下两行代码配置Git全局代理，将地址和端口替换为实际的代理地址（通常为127.0.0.1）和端口（例如7890，以实际为准）。

```bash
git config --global http.proxy http://地址:端口
git config --global https.proxy http://地址:端口
```

如果代理为SOCKS5协议，需要将http.proxy和https.proxy配置为socks5://地址:端口。

```powershell
git config --global http.proxy socks5://地址:端口
git config --global https.proxy socks5://地址:端口
```

检查配置是否生效
使用如下命令检查Git全局代理配置是否生效：

```powershell
git config --global --get http.proxy
git config --global --get https.proxy
```

如果返回的结果与配置的代理地址和端口一致，说明配置生效。

## 折腾过程中发现的问题

有的时候配置完成代理端口后，出现无法访问代理端口的错误，返回时间0ms这种，通常为代理端口配置错误，需要检查代理端口是否正确。

### 以Windows系统安装的的Clash For Windows为例

![Clash For Windows配置](/images/Git/cfw.png)
填写的应为General->Port中的端口（默认7890）

### 以Ubuntu系统安装Clash Verge为例

![Clash Verge配置](/images/Git/cv.png)
填写的应为首页->Clash信息中的端口

## 踩过的坑

在先前Windows平台上CFW上的服务商配置文件中默认端口为7890，在为General->Port也为7890，当时认为代理配置中的端口为实际代理端口。
![cfw-config](/images/Git/cfw-config.png)
在Ubuntu 平台上使用Clash Verge的时候并没有注意到Clash信息中的端口配置，错误地认为代理配置（7890）中的端口为实际代理端口,结果出现端口无法访问的问题。
![Clash Verge配置](/images/Git/cv-config.jpg)
通过netstat指令监视所有端口后发现并没有进程使用7890端口。
![netstat](/images/Git/netstat.jpg)
结果找到了疑似为Clash Verge的进程，端口实际上为7897。
后面再次执行下面指令

```powershell
git config --global http.proxy http://127.0.0.1:7897
git config --global https.proxy http://127.0.0.1:7897
```

配置完成后仓库可以正常clone和push/pull操作。
后面正式找到了正确的Clash Verge的端口配置
![Clash Verge配置](/images/Git/cv.png)

### 踩坑后总结

1. 别信配置文件，以实际端口为准
2. 如果没有成功，首先检查代理是否运行，然后再次检查端口是否正确

---

最后编辑时间：2025-10-19 03:09:06
