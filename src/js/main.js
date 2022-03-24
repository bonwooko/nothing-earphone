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

// ========== Footer Accordion Menu ==========
const accordionToggles = document.querySelectorAll('.footer__list-title');
const accordionIcons = document.querySelectorAll('.bx-chevron-down');
const accordionItems = document.querySelectorAll('.footer__items');

accordionToggles.forEach((list) => {
  list.addEventListener('click', () => {
    toggleAccordion(list);
  });
});

function toggleAccordion(el) {
  const icon = el.children[1];
  const item = el.nextElementSibling;
  icon.classList.toggle('icon-active');
  item.classList.toggle('active');
}
