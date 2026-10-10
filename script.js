/* ===== 页面交互小脚本 ===== */

// 1. 导航栏滚动时加背景阴影
const navCapsule = document.querySelector('.nav-capsule');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navCapsule.style.boxShadow = '0 8px 30px rgba(0, 229, 255, 0.15)';
        navCapsule.style.borderColor = 'rgba(0, 229, 255, 0.4)';
    } else {
        navCapsule.style.boxShadow = 'none';
        navCapsule.style.borderColor = 'var(--line)';
    }
});

// 2. 卡片入场动画（滚动到视口时淡入上移）
const cards = document.querySelectorAll('.work-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ${i * 0.12}s, transform 0.6s ${i * 0.12}s`;
    observer.observe(card);
});

// 3. 平滑滚动（针对锚点点击）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});