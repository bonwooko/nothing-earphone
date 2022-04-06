import ScrollMagic from 'scrollmagic';
import gsap from 'gsap';

// Body animation with GSAP
let timeLineTwo = gsap.timeline({ duration: 1.3, ease: 'power3.inOut' });

timeLineTwo
  .from('.home__title', {
    opacity: 0,
  })
  .from('.home__image', {
    height: '0px',
    duration: 0.5,
  });

// Body animation with Scroll Magic
const scrollPoints = document.querySelectorAll('.scroll__point');
scrollPoints.forEach((scrollPoint) => {
  new ScrollMagic.Scene({
    triggerElement: scrollPoint,
    triggerHook: 0.8,
  })
    .setClassToggle(scrollPoint, 'show')
    .addTo(new ScrollMagic.Controller());
});
