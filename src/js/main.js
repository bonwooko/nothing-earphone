// import gsap from 'gsap';

// ========== Nav menu toggle ==========
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.querySelector('.nav__close');
const navShadow = document.querySelector('.nav__shadow');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show__menu');
  navShadow.classList.add('show__menu-shadow');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show__menu');
  navShadow.classList.remove('show__menu-shadow');
});
