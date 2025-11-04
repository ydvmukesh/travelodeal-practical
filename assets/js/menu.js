/* ================================================
   Mobile Menu Toggle & Header Scroll
   SMACSS: Using state classes with 'is-' prefix
   ================================================ */

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const mobileOverlay = document.querySelector('.mobile-overlay');

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    mobileOverlay.classList.toggle('is-active');
    document.body.style.overflow = nav.classList.contains('is-active') ? 'hidden' : '';
}

// Close mobile menu
function closeMobileMenu() {
    mobileMenuToggle.classList.remove('is-active');
    nav.classList.remove('is-active');
    mobileOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
}

// Mobile menu toggle button
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            closeMobileMenu();
        }
    });
});

// Close mobile menu when clicking overlay
if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
}

// Close menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('is-scrolled');
    } else {
        header.classList.remove('is-scrolled');
    }
    
    lastScroll = currentScroll;
});



