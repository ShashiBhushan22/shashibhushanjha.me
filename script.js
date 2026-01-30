// ===============================================
// Navigation & Scroll Functionality
// ===============================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===============================================
// Smooth Scroll & Active Link
// ===============================================

// Highlight active section in navbar
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
});

// ===============================================
// Scroll Animations
// ===============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.timeline-item, .experience-card, .project-card, .skill-category, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===============================================
// Skill Progress Bar Animation
// ===============================================

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// ===============================================
// Back to Top Button
// ===============================================

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===============================================
// Contact Form Handling
// ===============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:bhushan.gate2022@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Optional: Show success message
    alert('Opening your email client... Please send the email to complete your message.');
    
    // Reset form
    contactForm.reset();
});

// ===============================================
// Typing Effect for Hero Section
// ===============================================

// The typing effect is handled by CSS, but we can add more interactive features here if needed

// ===============================================
// Dynamic Year in Footer
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `&copy; ${currentYear} Shashi Bhushan Jha. All rights reserved.`;
    }
});

// ===============================================
// Parallax Effect for Hero Section
// ===============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// ===============================================
// Smooth Reveal on Page Load
// ===============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===============================================
// Interactive Project Cards
// ===============================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeft = '4px solid var(--primary-color)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderLeft = 'none';
    });
});

// ===============================================
// Stats Counter Animation
// ===============================================

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target.querySelector('h3');
            const finalValue = statValue.textContent;
            
            // Only animate numbers
            if (!isNaN(parseFloat(finalValue))) {
                let currentValue = 0;
                const increment = parseFloat(finalValue) / 50;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= parseFloat(finalValue)) {
                        statValue.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        statValue.textContent = currentValue.toFixed(2);
                    }
                }, 30);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(stat => {
    statsObserver.observe(stat);
});

// ===============================================
// Easter Egg: Konami Code
// ===============================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ===============================================
// Print Styles Support
// ===============================================

window.addEventListener('beforeprint', () => {
    // Expand all sections before printing
    document.querySelectorAll('.section').forEach(section => {
        section.style.pageBreakInside = 'avoid';
    });
});

// ===============================================
// Performance: Lazy Loading Images
// ===============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('🚀 Resume website loaded successfully!');
console.log('💼 Shashi Bhushan Jha - M.Tech Electrical Engineering');
console.log('📧 Contact: bhushan.gate2022@gmail.com');

// ===============================================
// Chatbot CTA Interaction
// ===============================================

// CTA interaction with chatbot
document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatbotCta = document.querySelector('.chatbot-cta');
    
    if (chatToggle && chatbotCta) {
        // Hide CTA temporarily when chat is opened, show again when closed
        chatToggle.addEventListener('click', () => {
            const chatWindow = document.getElementById('chat-window');
            if (chatWindow && !chatWindow.classList.contains('hidden')) {
                // Chat is opening, hide CTA temporarily
                chatbotCta.style.opacity = '0';
                chatbotCta.style.pointerEvents = 'none';
            } else {
                // Chat is closing, show CTA again
                setTimeout(() => {
                    chatbotCta.style.opacity = '1';
                    chatbotCta.style.pointerEvents = 'auto';
                }, 300);
            }
        });
        
        // Click CTA to open chatbot
        chatbotCta.addEventListener('click', () => {
            chatToggle.click();
        });
    }
});
