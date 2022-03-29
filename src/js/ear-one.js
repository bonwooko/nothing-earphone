// ===== product image swiper =====
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

// ===== show white or black earphone =====
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

// ===== product image swiper =====
let detailSwiper = new Swiper('.description__detail-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
