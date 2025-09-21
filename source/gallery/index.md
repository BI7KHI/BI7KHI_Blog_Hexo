---
title: 摄影图库
date: 2025-01-27
type: gallery
layout: gallery
---
# 📷 摄影图库

欢迎来到我的摄影图库，这里按分类整理了我在不同场景下拍摄的作品。每个分类都记录着不同的故事和回忆。

## 📂 图库分类

<div class="gallery-categories">

<div class="category-card travel-card">
<div class="card-header">
<span class="card-icon">🏔️</span>
<h3><a href="/gallery/travel/">旅行摄影</a></h3>
</div>
<div class="card-content">
<p class="card-description">记录旅途中的美好时光，包含云南之行的精彩瞬间</p>
<div class="card-tags">
<span class="tag">云南之行</span>
</div>
<div class="card-stats">
<span class="photo-count">4+ 张照片</span>
</div>
</div>
</div>

<div class="category-card life-card">
<div class="card-header">
<span class="card-icon">📱</span>
<h3><a href="/gallery/life/">生活随拍</a></h3>
</div>
<div class="card-content">
<p class="card-description">捕捉日常生活中的美好瞬间</p>
<div class="card-tags">
<span class="tag">日常摄影</span>
</div>
<div class="card-stats">
<span class="photo-count">8+ 张照片</span>
</div>
</div>
</div>

<div class="category-card landscape-card">
<div class="card-header">
<span class="card-icon">🌄</span>
<h3><a href="/gallery/landscape/">风景摄影</a></h3>
</div>
<div class="card-content">
<p class="card-description">专注于自然风光和城市景观的摄影作品</p>
<div class="card-tags">
<span class="tag">天空之城</span>
</div>
<div class="card-stats">
<span class="photo-count">6+ 张照片</span>
</div>
</div>
</div>

<div class="category-card tech-card">
<div class="card-header">
<span class="card-icon">✉</span>
<h3><a href="/gallery/tech/">QSL收藏集</a></h3>
</div>
<div class="card-content">
<p class="card-description">来自世界各地的QSL卡片</p>
<div class="card-tags">
<span class="tag">国内</span>
<span class="tag">国际</span>
</div>
<div class="card-stats">
<span class="photo-count">4+ 张照片</span>
</div>
</div>
</div>

</div>

## 📊 图库统计

<div class="gallery-stats">
<div class="stats-container">
<div class="stat-item">
<div class="stat-icon">📁</div>
<div class="stat-info">
<span class="stat-number" data-count="4">0</span>
<span class="stat-label">分类</span>
</div>
</div>
<div class="stat-item">
<div class="stat-icon">📸</div>
<div class="stat-info">
<span class="stat-number" data-count="30">0</span>
<span class="stat-label">照片</span>
</div>
</div>
<div class="stat-item">
<div class="stat-icon">📅</div>
<div class="stat-info">
<span class="stat-number" data-count="2025">0</span>
<span class="stat-label">年份</span>
</div>
</div>
</div>
</div>

---

*持续更新中，记录生活的每一个精彩瞬间...*

<style>
/* 摄影图库归档页面样式 */
.gallery-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
    margin: 40px 0;
}

/* 分类卡片样式 */
.category-card {
    background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 20px;
    padding: 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.category-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00bcd4, #26a69a);
    transition: all 0.3s ease;
}

.category-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.category-card:hover::before {
    height: 6px;
    background: linear-gradient(90deg, #00acc1, #26a69a, #66bb6a);
}

/* 卡片头部 */
.card-header {
    display: flex;
    align-items: center;
    padding: 25px 25px 15px;
    background: linear-gradient(135deg, rgba(0, 188, 212, 0.05) 0%, rgba(38, 166, 154, 0.05) 100%);
}

.card-icon {
    font-size: 2.5em;
    margin-right: 15px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
}

.card-header h3 {
    margin: 0;
    font-size: 1.5em;
    font-weight: 600;
    color: #2c3e50;
    transition: all 0.3s ease;
}

.card-header h3 a {
    color: inherit;
    text-decoration: none;
    position: relative;
}

.card-header h3 a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00bcd4, #26a69a);
    transition: width 0.3s ease;
}

.card-header h3 a:hover::after {
    width: 100%;
}

/* 卡片内容 */
.card-content {
    padding: 0 25px 25px;
}

.card-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 1em;
}

/* 标签样式 */
.card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.tag {
    background: linear-gradient(135deg, #00bcd4, #26a69a);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 188, 212, 0.3);
}

.tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 188, 212, 0.4);
}

/* 卡片统计 */
.card-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    border-top: 1px solid #eee;
}

.photo-count {
    color: #00bcd4;
    font-weight: 600;
    font-size: 0.95em;
}

/* 特定卡片主题色 */
.travel-card:hover::before {
    background: linear-gradient(90deg, #ff6b6b, #ffa726);
}

.life-card:hover::before {
    background: linear-gradient(90deg, #42a5f5, #66bb6a);
}

.landscape-card:hover::before {
    background: linear-gradient(90deg, #26a69a, #66bb6a);
}

.tech-card:hover::before {
    background: linear-gradient(90deg, #ab47bc, #7e57c2);
}

/* 图库统计样式 */
.gallery-stats {
    margin: 50px 0;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 25px;
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
    position: relative;
    overflow: hidden;
}

.gallery-stats::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
}

.stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 25px;
    position: relative;
    z-index: 1;
}

.stat-item {
    display: flex;
    align-items: center;
    padding: 25px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.stat-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
}

.stat-item:hover::before {
    left: 100%;
}

.stat-item:hover {
    transform: translateY(-8px) scale(1.05);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.stat-icon {
    font-size: 2.5em;
    margin-right: 15px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.stat-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.stat-number {
    font-size: 2.2em;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.stat-label {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* 主标题样式 */
.gallery h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2.5em;
}

.gallery h2 {
    color: #2c3e50;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 1.8em;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .gallery-categories {
        grid-template-columns: 1fr;
        gap: 20px;
    }
  
    .gallery-stats {
        flex-direction: column;
        gap: 20px;
    }
  
    .gallery h1 {
        font-size: 2em;
    }
  
    .stat-number {
        font-size: 2em;
    }
}

/* 通用样式 */
.gallery p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 1.1em;
}

/* 页面加载动画 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.category-card {
    animation: fadeInUp 0.6s ease-out forwards;
}

.category-card:nth-child(1) { animation-delay: 0.1s; }
.category-card:nth-child(2) { animation-delay: 0.2s; }
.category-card:nth-child(3) { animation-delay: 0.3s; }
.category-card:nth-child(4) { animation-delay: 0.4s; }

.gallery-stats {
    animation: fadeInUp 0.8s ease-out 0.5s forwards;
    opacity: 0;
}

/* 滚动触发动画 */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-out;
}

.animate-on-scroll.animated {
    opacity: 1;
    transform: translateY(0);
}
</style>

<script>
// 数字动画效果
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number[data-count]');
  
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-count'));
        const duration = 2000; // 2秒动画
        const step = target / (duration / 16); // 60fps
        let current = 0;
  
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
  
            if (target === 30) {
                number.textContent = Math.floor(current) + '+';
            } else {
                number.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// 滚动动画观察器
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
      
                // 如果是统计模块，触发数字动画
                if (entry.target.classList.contains('gallery-stats')) {
                    setTimeout(animateNumbers, 300);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
  
    // 观察需要动画的元素
    document.querySelectorAll('.gallery-stats, .category-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// 卡片悬停效果增强
function enhanceCardInteractions() {
    const cards = document.querySelectorAll('.category-card');
  
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // 添加轻微的倾斜效果
            this.style.transform = 'translateY(-8px) scale(1.02) rotateY(5deg)';
        });
  
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
  
        // 点击波纹效果
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
  
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1000;
            `;
  
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
  
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// 添加CSS动画关键帧
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    enhanceCardInteractions();
  
    // 延迟启动数字动画，如果统计模块在视口内
    setTimeout(() => {
        const statsElement = document.querySelector('.gallery-stats');
        if (statsElement) {
            const rect = statsElement.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animateNumbers();
            }
        }
    }, 1000);
});
</script>
