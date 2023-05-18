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
  const swiper = document.querySelector('.swiper');
  const svg = document.querySelector('.support__button--icon');
  button.addEventListener(`click`, onSupportButtonClick);
  swiper.addEventListener(`mouseenter`, swiperHoverOn);
  swiper.addEventListener(`mouseleave`, swiperHoverOff);

  function onSupportButtonClick() {
    if (button.classList.contains('lock')) {
      button.classList.remove(`lock`);
      swiper.classList.add('swiper--tablet');
      svg.classList.add('support__button--up');
      button.blur();
    } else {
      button.classList.add(`lock`);
      swiper.classList.remove('swiper--tablet');
      svg.classList.remove('support__button--up');
      button.blur();
    }
  }

  function swiperHoverOn() {
    if (button.classList.contains('lock')) {
      swiper.classList.add(`swiper__scrollbar`);
    } else {
      return;
    }
  }

  function swiperHoverOff() {
    swiper.classList.remove(`swiper__scrollbar`);
  }
}
