---
title: 技术折腾
date: 2025-01-27
type: gallery
layout: gallery
---

# 🔧 技术折腾

记录在技术探索和折腾过程中的精彩瞬间，包括硬件改造、软件开发、电子制作等各种技术项目的成果展示。

## 📸 照片展示

<div class="gallery-grid">
<!-- 暂无图片，待后续添加 -->
<div class="no-photos">
<div class="no-photos-icon">📷</div>
<p>暂无照片，敬请期待...</p>
</div>
</div>

<style>
/* 技术折腾图库样式 */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
}

.no-photos {
    grid-column: 1 / -1;
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 15px;
    border: 2px dashed #dee2e6;
}

.no-photos-icon {
    font-size: 4rem;
    margin-bottom: 20px;
    opacity: 0.6;
}

.no-photos p {
    font-size: 1.2rem;
    color: #6c757d;
    margin: 0;
}

.photo-item {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    background: #fff;
}

.photo-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.photo-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.photo-item:hover img {
    transform: scale(1.05);
}

.photo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: white;
    padding: 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.photo-item:hover .photo-overlay {
    transform: translateY(0);
}

.photo-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 5px;
}

.photo-description {
    font-size: 0.9rem;
    opacity: 0.9;
    margin: 0;
}
</style>