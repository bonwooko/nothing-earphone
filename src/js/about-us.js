// ===== SHOW ASIDE LIST ON CLICK =====
const asideTitle = document.querySelector('.about__aside-title-wrap');
const asideList = document.querySelector('.about__aside-list');

asideTitle.addEventListener('click', () => {
  asideList.classList.toggle('show__aside-list');
});

// ===== HIDE ASIDE LIST AFTER CLICKING THE ASIDE LINK =====
const asideLinks = document.querySelectorAll('.about__aside-link');

asideLinks.forEach((link) => {
  link.addEventListener('click', () => {
    asideList.classList.remove('show__aside-list');
  });
});

// ===== OUR STORY SWIPER =====
const ourStorySwiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
