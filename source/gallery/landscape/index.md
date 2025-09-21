---
title: 风景摄影
date: 2025-01-27
type: gallery
layout: gallery
---

# 🌄 风景摄影

用镜头记录大自然的壮美，捕捉那些令人震撼的风景瞬间。

## 🏔️ 山川风光

高山流水，云雾缭绕，大自然的鬼斧神工总是让人叹为观止。

<div class="photo-grid">

![航拍风景](/images/gallery/DJI_20250621172014_0068_D.jpg)

</div>

## 🌅 日出日落

每一个日出日落都是独一无二的，记录下这些美好的时刻。

<div class="photo-grid">

![全景风光](/images/gallery/PANO_0001 Panoram1a@1.25x.jpg)
![航拍全景](/images/gallery/dji_fly_20250730_132900_0007_1753864650024_pano.jpg)

</div>

---

<div class="gallery-nav">
<a href="/gallery/travel/" class="nav-btn">← 旅行摄影</a>
<a href="/gallery/" class="nav-btn">返回图库首页</a>
<a href="/gallery/life/" class="nav-btn">生活随拍 →</a>
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