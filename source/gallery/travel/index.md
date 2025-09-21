---
title: 旅行摄影
date: 2025-01-27
type: gallery
layout: gallery
---

# 📸 旅行摄影

记录旅途中的美好时光，每一张照片都是一段珍贵的回忆。

## 🏔️ 云南之行 (2025年)

### 丽江古城
古城的石板路，承载着千年的历史，每一块石头都诉说着古老的故事。漫步在古城中，感受着纳西文化的独特魅力。

<div class="photo-grid">

![丽江古城1](/images/gallery/dji_fly_20250802_190946_0059_1754231249090_photo.jpg)

丽江市区 狮头山和玉龙雪山

![丽江古城2](/images/gallery/Screenshot_20250904_003552648.jpg)

长焦看玉龙

</div>

### 玉龙雪山
雪山巍峨，云雾缭绕，大自然的鬼斧神工令人叹为观止。站在雪山脚下，感受着大自然的壮美与神秘。

![蓝月湖](/images/gallery/dji_fly_20250730_132900_0007_1753864650024_pano.jpg)
玉龙山下蓝月湖

### 大理风光
苍山洱海，风花雪月，大理的美景如诗如画。这里的每一处风景都让人流连忘返。

![大理风光](/images/gallery/IMG_20250804_105840.jpg)

苍山洱海 自行车🚲


---

<div class="gallery-nav">
<a href="/gallery/" class="nav-btn">← 返回图库首页</a>
<a href="/gallery/landscape/" class="nav-btn">风景摄影 →</a>
</div>

<style>
/* 导航按钮样式 */
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

/* 响应式设计 */
@media (max-width: 768px) {
    .gallery-nav {
        flex-direction: column;
        gap: 10px;
    }
    
    .nav-btn {
        text-align: center;
    }
    
    .photo-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .photo-grid img,
    img:not(.photo-grid img) {
        max-height: 300px;
        padding: 8px;
    }
}

/* 图片加载动画 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.photo-grid img,
img:not(.photo-grid img) {
    animation: fadeIn 0.6s ease-out;
}
</style>