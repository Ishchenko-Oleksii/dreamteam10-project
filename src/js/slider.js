import Swiper from 'swiper/swiper-bundle';

if (window.innerWidth <= 768) {
  const swiperMobile = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button',
      prevEl: '.swiper-button-prev',
    },
    cover: true,
  });
} else {
  const button = document.querySelector('.support__button');
  const support = document.querySelector('.support');
  const swiper = document.querySelector('.swiper');
  const svg = document.querySelector('.support__button--icon');
  button.addEventListener(`click`, onSupportButtonClick);
  swiper.addEventListener(`mouseenter`, swiperHoverOn);
  swiper.addEventListener(`mouseleave`, swiperHoverOff);

  function onSupportButtonClick() {
    if (button.classList.contains('lock')) {
      button.classList.remove(`lock`);
      support.classList.add('support--tablet');
      swiper.classList.add('swiper--tablet');
      svg.classList.add('up');
      button.blur();
    } else {
      button.classList.add(`lock`);
      support.classList.remove('support--tablet');
      swiper.classList.remove('swiper--tablet');
      svg.classList.remove('up');
      button.blur();
    }
  }

  function swiperHoverOn() {swiper.classList.add(`swiper__scrollbar`)}

  function swiperHoverOff() {swiper.classList.remove(`swiper__scrollbar`);}
}
