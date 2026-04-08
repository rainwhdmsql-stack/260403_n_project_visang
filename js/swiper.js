var swiper = new Swiper(".Pr-mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//  var swiper = new Swiper(".co-mySwiper", {
//       spaceBetween: 10,
//       slidesPerView: 4,
//       freeMode: true,
//       watchSlidesProgress: true,
//     });
//     var swiper2 = new Swiper(".co-mySwiper2", {
//       spaceBetween: 10,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       thumbs: {
//         swiper: swiper,
//       },
//     });
var swiper = new Swiper(".main-slide-wrap .co-mySwiper", {
  spaceBetween: 12,
  slidesPerView: 4,
  loop: true,
  freeMode: false,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".main-slide-wrap .co-mySwiper2", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".main-slide-wrap .swiper-button-next",
    prevEl: ".main-slide-wrap .swiper-button-prev",
  },
});

// 처음 화면에서 하단을 2번부터 시작
swiper.slideToLoop(1, 0);

const nextBtn = document.querySelector(".main-slide-wrap .swiper-button-next");
const prevBtn = document.querySelector(".main-slide-wrap .swiper-button-prev");

nextBtn.addEventListener("click", () => {
  swiper.slideNext();
});

prevBtn.addEventListener("click", () => {
  swiper.slidePrev();
});
