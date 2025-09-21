---
title: 技术记录
date: 2025-01-27
type: gallery
layout: gallery
---

# 💻 技术记录

记录技术学习和项目开发过程中的重要时刻，分享技术成长的点点滴滴。

## 🚴‍♂️ 自行车电控项目

记录自行车电控系统的开发过程，从硬件设计到软件实现的完整历程。

<div class="photo-grid">

![电控系统1](/images/自行车电控指南/1(1).jpg)
![电控系统2](/images/自行车电控指南/1(3).jpg)
![电控系统3](/images/自行车电控指南/1(4).jpg)
![电控系统4](/images/自行车电控指南/1(5).jpg)

</div>

### 硬件组装过程

<div class="photo-grid">

![组装过程1](/images/自行车电控指南/1(7).jpg)
![组装过程2](/images/自行车电控指南/1(8).jpg)
![组装过程3](/images/自行车电控指南/1(9).jpg)
![组装过程4](/images/自行车电控指南/1(10).jpg)

</div>

### 测试与调试

<div class="photo-grid">

![测试阶段1](/images/自行车电控指南/1(11).jpg)
![测试阶段2](/images/自行车电控指南/1(12).jpg)
![最终成品](/images/自行车电控指南/2.jpg)

</div>

## ☁️ 服务器运维记录

腾讯轻量云服务器的配置和优化过程，记录系统性能监控的重要数据。

<div class="photo-grid">

![CPU监控](/images/腾讯轻量云服务器压榨计划/CPU.png)
![内存监控](/images/腾讯轻量云服务器压榨计划/RAM.png)
![磁盘IO](/images/腾讯轻量云服务器压榨计划/磁盘IO.png)
![网络IO](/images/腾讯轻量云服务器压榨计划/网络IO.png)

</div>

---

<div class="gallery-nav">
<a href="/gallery/life/" class="nav-btn">← 生活随拍</a>
<a href="/gallery/" class="nav-btn">返回图库首页</a>
</div>

<style>
.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.photo-grid img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
    cursor: pointer;
}

.photo-grid img:hover {
    transform: scale(1.03) translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.25);
}

.gallery-nav {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding: 20px 0;
    border-top: 2px solid #00bcd4;
}

.nav-btn {
    background: linear-gradient(135deg, #00bcd4, #0097a7);
    color: white;
    padding: 12px 24px;
    border-radius: 25px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 500;
}

.nav-btn:hover {
    background: linear-gradient(135deg, #0097a7, #00838f);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 188, 212, 0.3);
}

@media (max-width: 768px) {
    .gallery-nav {
        flex-direction: column;
        gap: 10px;
    }
    
    .nav-btn {
        text-align: center;
    }
}
</style>