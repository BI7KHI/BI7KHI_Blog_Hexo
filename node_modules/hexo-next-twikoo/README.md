# Hexo NexT Twikoo

![Theme Version](https://img.shields.io/badge/NexT-v8.4.0+-blue?style=flat-square)
![Package Version](https://img.shields.io/github/package-json/v/imaegoo/hexo-next-twikoo?style=flat-square)

Twikoo comment system for NexT. Twikoo is a simple, safe, free comment system.

## Install

```bash
# For NexT version >= 8.0.0 && < 8.4.0
npm install hexo-next-twikoo@1.0.0
# For NexT version >= 8.4.0
npm install hexo-next-twikoo@1.0.2
```

## Register

Please refer to https://twikoo.js.org/quick-start.html

## Configure

Set the value `enable` to `true`, add the obtained env ID (`envId`), and edit other configurations in `twikoo` section in the config file as following. You can config those in both **hexo** or **theme** `_config.yml`:

```yml next/_config.yml
# Twikoo
# For more information: https://twikoo.js.org, https://github.com/imaegoo/twikoo
twikoo:
  enable: true
  visitor: true
  envId: twikoo-1gs9l0fb17e7897a # 环境 ID，搭建教程：https://twikoo.js.org/quick-start.html
  # region: ap-guangzhou # 环境地域，默认为 ap-shanghai
  # path: 'window.location.pathname' # 自定义文章路径
  # jsUrl: https://cdn.jsdelivr.net/npm/twikoo/dist/twikoo.all.min.js # 自定义 JS 文件地址
```
