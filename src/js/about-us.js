import gsap from 'gsap';

let aboutPage = gsap.timeline({ duration: 1.3, ease: 'power3.inOut' });

aboutPage
  .from('.about__hero-title', {
    opacity: 0,
    transform: 'translateY(-5rem)',
  })
  .from('.about__hero-line', {
    width: 0,
  })
  .from('.about__hero-paragraph', {
    opacity: 0,
    transform: 'scale(90%)',
  });

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
