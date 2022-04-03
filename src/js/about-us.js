// ===== SHOW ASIDE LIST ON CLICK =====
const asideTitle = document.querySelector('.about__aside-title-wrap');
const asideList = document.querySelector('.about__aside-list');

asideTitle.addEventListener('click', () => {
  asideList.classList.toggle('show__aside-list');
});
