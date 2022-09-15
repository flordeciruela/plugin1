const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  /*
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  */
  paginationClickable: true,
  direction: 'horizontal',
  // Navigation arrows
  /*
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  */
  breakpoints: {
    1920: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    1028: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    480: {
        slidesPerView: 1,
        spaceBetween: 10
    }
  }
});
