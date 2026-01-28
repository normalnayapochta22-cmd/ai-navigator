// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
window.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .expert-card, .step-card, .lesson-card');

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Add active state to CTA buttons
document.querySelectorAll('.cta-button, .cta-button-large').forEach(button => {
    button.addEventListener('click', function(e) {
        // You can add your custom action here
        // For example, opening a Telegram link or modal
        console.log('CTA clicked!');
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Mobile menu toggle (if needed in future)
const toggleMobileMenu = () => {
    // Placeholder for mobile menu functionality
    console.log('Mobile menu toggle');
};

// Price calculator (optional feature)
const calculatePrice = (months) => {
    const prices = {
        1: 1990,
        3: 4990
    };
    return prices[months] || 0;
};

// Console easter egg
console.log('%c🚀 AI Навигатор: Пульс Будущего', 'font-size: 20px; color: #718BC6; font-weight: bold;');
console.log('%cСайт создан с помощью AI 🤖', 'font-size: 14px; color: #516C99;');
