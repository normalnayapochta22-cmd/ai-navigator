// Ultra-Modern AI Navigator - Lightweight JavaScript
// Particles animation disabled for performance

// Scroll-based animations (AOS-like)
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-aos]');
        this.init();
    }

    init() {
        this.observe();
        window.addEventListener('scroll', () => this.check());
        this.check();
    }

    observe() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        this.elements.forEach(el => observer.observe(el));
    }

    check() {
        this.elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight * 0.9) {
                el.classList.add('aos-animate');
            }
        });
    }
}

new ScrollAnimations();

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

// Custom cursor effect
class CustomCursor {
    constructor() {
        this.cursor = this.createCursor();
        this.cursorDot = this.createCursorDot();
        this.init();
    }

    createCursor() {
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            width: 40px;
            height: 40px;
            border: 2px solid rgba(168, 85, 247, 0.5);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.15s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);
        return cursor;
    }

    createCursorDot() {
        const dot = document.createElement('div');
        dot.style.cssText = `
            width: 8px;
            height: 8px;
            background: rgba(168, 85, 247, 0.8);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            transition: all 0.1s ease;
        `;
        document.body.appendChild(dot);
        return dot;
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.cursorDot.style.left = e.clientX + 'px';
            this.cursorDot.style.top = e.clientY + 'px';

            setTimeout(() => {
                this.cursor.style.left = (e.clientX - 20) + 'px';
                this.cursor.style.top = (e.clientY - 20) + 'px';
            }, 50);
        });

        // Hover effect on clickable elements
        const clickables = document.querySelectorAll('a, button, .glass-card');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(1.5)';
                this.cursor.style.borderColor = 'rgba(0, 217, 255, 0.8)';
            });

            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.borderColor = 'rgba(168, 85, 247, 0.5)';
            });
        });
    }
}

// Custom cursor disabled for performance

// Button ripple effect
document.querySelectorAll('.glow-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: translate(-50%, -50%);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
        `;

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax disabled for performance

// Price animation disabled for performance

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console message
console.log('%c🚀 AI Навигатор', 'font-size: 24px; color: #667eea; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%c✨ Ultra-Modern Design by AI', 'font-size: 14px; color: #a855f7; font-weight: bold;');
console.log('%cСайт создан с использованием передовых веб-технологий', 'font-size: 12px; color: #00d9ff;');

// Performance optimization - Lazy load images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

// Tilt effect disabled for performance

// Scroll progress disabled for performance
