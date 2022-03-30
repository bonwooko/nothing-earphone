// ===== PRODUCT IMAGE SWIPER =====
const blackSwiper = new Swiper('.black__earphone', {
  slidesPerView: 1,
  effect: 'fade',
  loop: true,
});

const whiteSwiper = new Swiper('.white__earphone', {
  slidesPerView: 1,
  effect: 'fade',
  loop: true,
});

// ===== SHOW WHITE OR BLACK EARPHONE =====
const productButtons = document.querySelectorAll('.color__button');
const blackButton = document.getElementById('button-black');
const whiteButton = document.getElementById('button-white');
const productContainer = document.querySelector('.product__container');
const blackEarphone = document.querySelector('.black__earphone');
const whiteEarphone = document.querySelector('.white__earphone');
const productTextColor = document.querySelector('.product__text-wrap');

blackButton.addEventListener('click', () => {
  productContainer.style.backgroundColor = 'var(--color-white)';
  blackEarphone.classList.remove('hide__swiper');
  whiteEarphone.classList.add('hide__swiper');
  productTextColor.style.color = 'var(--color-black)';
  productButtons.forEach((button) => {
    button.style.color = 'var(--color-white)';
    button.style.backgroundColor = 'var(--color-black)';
  });
});

whiteButton.addEventListener('click', () => {
  productContainer.style.backgroundColor = 'var(--color-black)';
  blackEarphone.classList.add('hide__swiper');
  whiteEarphone.classList.remove('hide__swiper');
  productTextColor.style.color = 'var(--color-white)';
  productButtons.forEach((button) => {
    button.style.color = 'var(--color-black)';
    button.style.backgroundColor = 'var(--color-white)';
  });
});

// ===== PRODUCT IMAGE SWIPER =====
let detailSwiper = new Swiper('.description__detail-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// ===== PRODUCT FEATURE ACCORDION =====
const featureLinks = document.querySelectorAll('.accordion__link');
// const featureContents = document.querySelectorAll('.accordion__content');

featureLinks.forEach((link) => {
  link.addEventListener('click', () => {
    toggleFeatureAccordion(link);
  });
});

function toggleFeatureAccordion(el) {
  const icon = el.children[1];
  const content = el.nextElementSibling;
  icon.classList.toggle('active__feature-icon');
  content.classList.toggle('active__feature-content');
}
