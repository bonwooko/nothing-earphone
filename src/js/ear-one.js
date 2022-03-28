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
const blackButton = document.getElementById('button-black');
const whiteButton = document.getElementById('button-white');
const productContainer = document.querySelector('.product__container');
const blackEarphone = document.querySelector('.black__earphone');
const whiteEarphone = document.querySelector('.white__earphone');

blackButton.addEventListener('click', () => {
  productContainer.style.backgroundColor = 'var(--color-white)';
  blackEarphone.classList.remove('hide__swiper');
  whiteEarphone.classList.add('hide__swiper');
});

whiteButton.addEventListener('click', () => {
  productContainer.style.backgroundColor = 'var(--color-black)';
  blackEarphone.classList.add('hide__swiper');
  whiteEarphone.classList.remove('hide__swiper');
});
