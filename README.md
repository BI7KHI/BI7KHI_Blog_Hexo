# BI7KHI Blog Hexo 项目

这是一个使用 Hexo 构建的博客项目。以下是项目使用的相关依赖和配置信息。

## 依赖列表
从 `package.json` 中提取的依赖：

- hexo: ^7.3.0
- hexo-generator-archive: ^2.0.0
- hexo-generator-category: ^2.0.0
- hexo-generator-index: ^4.0.0
- hexo-generator-search: ^2.4.3
- hexo-generator-tag: ^2.0.0
- hexo-renderer-ejs: ^2.0.0
- hexo-renderer-markdown-it: ^7.1.1
- hexo-renderer-mathjax: ^0.6.0
- hexo-renderer-stylus: ^3.0.1
- hexo-renderer-swig: ^2.0.0
- hexo-server: ^3.0.0
- hexo-theme-landscape: ^1.0.0
- hexo-theme-nexmoe: ^4.2.2
- hexo-wordcount: ^6.0.1
- markdown-it-mathjax3: ^4.3.2

## 安装依赖
运行以下命令安装依赖：
```
npm install
```

## 运行博客
- 本地预览：`hexo server`
- 生成静态文件：`hexo generate`
- 部署：`hexo deploy` (配置好 deploy 后)

## 主题
使用 hexo-theme-nexmoe 主题，配置在 `_config.nexmoe.yml` 中。

更多详情请参考 Hexo 官方文档：https://hexo.io/docs/