'use strict';

// Scroll Progress Indicator
document.addEventListener('scroll', function () {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrolledPercentage + '%';
});

// Mobile Navigation Menu
const mobileBurger = document.querySelector('.header__menu-icon');
const mobileMenu = document.querySelector('.header__nav--mobile');
const burgerIconPath = 'assets/images/svg/menu.svg';
const exitIconPath = 'assets/images/svg/exit.svg';
mobileBurger.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
    if (mobileBurger.src.includes('menu.svg')) mobileBurger.src = exitIconPath;
    else mobileBurger.src = burgerIconPath;
});
const headerHeight = document.querySelector('.header').offsetHeight;
mobileMenu.style.marginTop = `${headerHeight + 4}px`;

// Smooth scroll into view
const contactDetails = document.getElementById('connect-directly');
const portfolioSection = document.getElementById('my-portfolio');
const connectButton = document.querySelector('.btn--connect');
const portfolioButton = document.querySelector('.btn--my-portfolio');
connectButton.addEventListener('click', () => {
    contactDetails.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        scrollTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
});
portfolioButton.addEventListener('click', () => {
    portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        scrollTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
});
