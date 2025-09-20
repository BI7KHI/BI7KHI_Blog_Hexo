---
title: Hello World!
date: 2025-09-18 20:31:15
tags: [第一篇博客,技术,hello world,web]
categories: [技术]
cover: /images/background_mainpage.png
---
# 🎉 oi 这都被你发现了

这个博客是由Hexo搭建的，原先为NexT主题，现在应用Nexmoe主题，托管在github上，用于吹水和发牢骚，偶尔分享一些技术心得

# 博客折腾历程

## Wordpress阶段

自从暑假购买了一台70元一年的腾讯云服务器(4G4U3M)，开始了各种折腾，最先计划是拿来做Minecraft服务器的，然后就计划使用Wordpress在这台服务器上部署。

但是使用Wordpress出现了一些问题，首先得进行站点数据库的部署，然后找主题等等等等。在找主题这一块，其实也没怎么找的到合适的主题(Wordpress毕竟是一个比较老的博客框架了)。而后Minecraft服务器增加了一些mod后服务器负载明显的增加，wordpress出现卡顿现象，鉴于没在Wordpress上写过几篇blog，故最后放弃了这个方案。

## Halo阶段

后面服务器部署了Docker，先是安装了远程桌面服务，而后又看到Hexo框架现代化的界面吸引了我，遂计划部署，但是部署过程并不顺利，例如console界面一直打不开，把docker整崩的情况也存在，如图所示，CPU占用一度达到了148.79%，然后Docker崩溃，顺带把服务器干下线。

![Docker-err](/images/fd6e17e750e5ef1cc655ed88cffce739.jpg "Docker-err")

后面再使用Docker Compose问题仍然出现，故后面也没在考虑这个框架。

## Hexo阶段

后面的事在打完数模比赛后的了,数模队友BG7KMT那个水群的[hongliu114 (Hong Liu)](https://github.com/hongliu114)关注了我的数模存储库并follow了我的github账号，在他的存储库中看到了使用Hexo搭建的静态页面并托管在github上，而后又了解了Github Pages，看来确实适合拿来搭建博客，于是就折腾着有了这么一个站点。

### 目前来看Hexo＋Github Pages的方式有什么好处

* 部署方便，由于页面部署在github上，并不需要我配置任何服务器。后面需要使用自定义域名也只需要加上CNAME解析就行了
* 不占用我的服务器资源，也不会影响到我服务器内的其它项目运行，理论上不会崩溃
* 更新内容简单，如果需要更新页面只需要在VS Code上Push到github存储库即可
* 使用Markdown编辑，最喜欢的一集。Markdown是一种轻量级标记语言，功能全面，基本满足博客编辑需求

# 千里之行，始于足下

在这个博客中我会分享各种或无聊或有趣的玩意，希望这里的内容对你有所帮助。如果你喜欢我的文章，欢迎分享和交流！

---

*最后一次编辑时间：2025年9月19日 19:03:10*
