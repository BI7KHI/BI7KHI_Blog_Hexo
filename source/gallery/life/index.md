---
title: 生活随拍
date: 2025-01-27
type: gallery
layout: gallery
---

# 📱 生活随拍

记录生活中的点点滴滴，发现平凡中的美好瞬间。

## 📷 日常摄影

生活中总有那么一些瞬间值得被记录下来，无论是一个美丽的日落，还是一个有趣的瞬间。

<div class="photo-grid">

![生活随拍1](/images/gallery/IMG_20250804_105840.jpg)
![生活随拍2](/images/gallery/Screenshot_20250904_003552648.jpg)

</div>

## 🌅 风光记录

用镜头捕捉身边的美景，记录每一个值得纪念的时刻。

<div class="photo-grid">

![全景照片](/images/gallery/PANO_0001 Panoram1a@1.25x.jpg)
![航拍作品1](/images/gallery/dji_fly_20250730_132900_0007_1753864650024_pano.jpg)
![航拍作品2](/images/gallery/dji_fly_20250802_190946_0059_1754231249090_photo.jpg)

</div>

---

<div class="gallery-nav">
<a href="/gallery/" class="nav-btn">← 返回图库首页</a>
<a href="/gallery/tech/" class="nav-btn">技术记录 →</a>
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