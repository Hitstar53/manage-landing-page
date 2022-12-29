const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') 
        ? navToggle.setAttribute('aria-expanded', 'false') 
        : navToggle.setAttribute('aria-expanded', 'true');
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
});

// Slider
const slider = new A11YSlider(document.querySelector('.slider'), {
   adaptiveHeight: true,
   dots: true,
   arrows: false,
   slidesToShow: 1,
   responsive: {
    480: {
        dots: true,
    },
    800: {
        slidesToShow: 2
    },
    1200: {
        slidesToShow: 3,
        dots: false,
    },
   },
});