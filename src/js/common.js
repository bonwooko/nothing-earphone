import gsap from 'gsap';

// ========== Header animation ==========
let timeLine = gsap.timeline({ duration: 1, ease: 'power3.inOut' });

timeLine
  .from('.nav__logo-text', {
    opacity: 0,
  })
  .from('.nav__link', {
    opacity: 0,
    stagger: 0.2,
  });

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

// ========== Footer year ==========
const thisYear = document.querySelector('.this__year');

thisYear.textContent = new Date().getFullYear();
