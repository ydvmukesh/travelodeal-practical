// Services Swiper Slider
const servicesSwiper = new Swiper('.services__cards', {
    // Swiper configuration
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    mousewheel: true,
    // Autoplay
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    
 

    
    // Responsive breakpoints
    breakpoints: {
        // When window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // When window width is >= 768px
        768: {
            slidesPerView: 2.1,
            spaceBetween: 24,
        },
        // When window width is >= 992px
        992: {
            slidesPerView: 2.4,
            spaceBetween: 32,
        },
        // When window width is >= 1200px
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 32,
        },
    },
    
    // Effects
    effect: 'slide',
    speed: 600,
});

// Destinations Swiper Slider
const destinationsSwiper = new Swiper('.destinations__slider', {
    // Swiper configuration
    slidesPerView: 1,
    spaceBetween: 24,
    loop: false,
    
    // Navigation
    navigation: {
        nextEl: '.destinations__nav-btn--next',
        prevEl: '.destinations__nav-btn--prev',
    },
    
    // Autoplay
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    
    // Responsive breakpoints
    breakpoints: {
        // When window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        // When window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 28,
        },
        // When window width is >= 992px
        992: {
            slidesPerView: 2.5,
            spaceBetween: 32,
        },
        // When window width is >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
    
    // Effects
    effect: 'slide',
    speed: 700,
});

