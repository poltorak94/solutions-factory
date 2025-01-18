$(document).ready(function () {
  //header
  //переключатель языков
  $(".header__switcher-item").on("click", function (e) {
    e.preventDefault();
    $(".header__switcher-item").removeClass("header__switcher-item--active");
    $(this).addClass("header__switcher-item--active");
  });

  //главынй слайдер
  let heroSlider = new Swiper(".hero__slider", {
    autoHeight: true,
    pagination: {
      el: ".hero__dots",
      clickable: true,
    },
  });

  //слайдер отзывов
  let reviews = new Swiper(".reviews", {
    pagination: {
      el: ".reviews__dots",
      clickable: true,
    },
    centeredSlides: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".reviews__arrows--reviews .reviews__arrow--right",
      prevEl: ".reviews__arrows--reviews .reviews__arrow--left",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
      },
      990: {
        slidesPerView: "auto",
        centeredSlides: true,
      }
    },
  });

  //cлайдер логотипов
  let logo = new Swiper(".logo-slides", {
    slidesPerView: "auto",
    loop: true,
    navigation: {
      nextEl: ".logo-right",
      prevEl: ".logo-left",
    },
  });

  //cлайдер вакансий
  let career = new Swiper(".career-slider", {
    pagination: {
      el: ".career-dots",
      clickable: true,
    },
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".reviews__arrows--career .reviews__arrow--right",
      prevEl: ".reviews__arrows--career .reviews__arrow--left",
    },
  });

  //мобильное меню
  $(".header__burger").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("header__burger--active");
    $(".header").toggleClass("header--open");
  });
});
