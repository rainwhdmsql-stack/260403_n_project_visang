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
const bookData = [
  {
    cate: "초등6          영어",
    icon: "eng-1",
    title: "완자 공부력 초등영어 영단어 6A",
    desc: [
      "20일 완성으로 꾸준히 끝내는 영단어",
      "쉽고 정확한 발음 기반 단어 학습 설계",
      "실력 Test로 성취도 점검",
      "하루 4쪽, 20일 동안 가벼운 학습 분량",
    ],
  },
  {
    cate: "초등5          수학",
    icon: "math-1",
    title: "개념루트 공통수학 1 (22개정)",
    desc: [
      "친절한 설명과 문제로 핵심 개념을 한눈에 이해",
      "수준별 중요 예제로 개념 적용 + 실력 다지기",
      "빈출 문제와 심화 개념으로 내신도 빈틈없이 대비",
      "수준별 문제, 중요 기출 문제로 문제 해결력 향상",
    ],
  },
  {
    cate: "중학2          수학",
    icon: "math-2",
    title: "교과서 개념잡기 중학 수학 2-1 (22개정)",
    desc: [
      "교과서 개념 3주 완성",
      "교과서 개념을 꼼꼼하게",
      "기초 문제로 쉽게 공부",
      "익힘북으로 한 번 더 확인",
    ],
  },
  {
    cate: "초등4          수학",
    icon: "math-3",
    title: "개념플러스유형 파워 초등 수학 4-1 (22개정)",
    desc: [
      "개념과 유형을 하나로",
      "22개정 완벽 반영",
      "대한민국 대표 수학 교재",
      "누적 4,300만권 판매",
    ],
  },
  {
    cate: "고등2,3          영어",
    icon: "eng-2",
    title: "유형만렙 라이트 대수 (22개정)",
    desc: [
      "반드시 알아야 하는 교과서 개념을 쉽게 이해",
      "연산 문제와 개념 응용 문제로 충분한 적용 연습",
      "유형별 반복으로 실전 감각 UP!",
      "중요 실전 문제를 다시 점검하여 완벽하게 기본 완성",
    ],
  },
  {
    cate: "초등5           과학",
    icon: "sci-1",
    title: "오투 초등 과학 5-1 (22개정)",
    desc: [
      "고등 수학 개념의 흐름 정리",
      "핵심 개념 중심 학습",
      "문제 풀이 전 개념 이해 강화",
      "내신 대비 기본서로 활용 가능",
    ],
  },
  {
    cate: "초등6           과학",
    icon: "sci-2",
    title: "오투 초등 과학 6-1 (22개정)",
    desc: [
      "교과서 핵심 개념만 깔끔하게",
      "생생한 동영상으로 탐구 과정을 쉽게",
      "실전 마무리 문제로 단원 평가 완벽 대비",
      "초중고 과학 1위 참고서",
    ],
  },
];

const bookCate = document.getElementById("bookCate");
const bookTitle = document.getElementById("bookTitle");
const bookDesc = document.getElementById("bookDesc");

function updateBookInfo(index) {
  const data = bookData[index];
  if (!data) return;

  bookCate.textContent = data.cate;

  // ✅ 안정 버전
  bookCate.className = "book-cate " + data.icon;

  bookTitle.textContent = data.title;
  bookDesc.innerHTML = data.desc.map((item) => `<li>${item}</li>`).join("");
}

var swiper = new Swiper(".main-slide-wrap .co-mySwiper", {
  spaceBetween: 8,
  slidesPerView:3.5,
  loop: true,
  freeMode: false,
  watchSlidesProgress: true,
  slideToClickedSlide: true,

  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    486: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    390: {
      slidesPerView: 3.5,
      spaceBetween: 8,
    },
    
  },
});

var swiper2 = new Swiper(".main-slide-wrap .co-mySwiper2", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".main-slide-wrap .swiper-button-next",
    prevEl: ".main-slide-wrap .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  on: {
    init: function () {
      updateBookInfo(this.realIndex);
    },
    slideChange: function () {
      updateBookInfo(this.realIndex);
    },
  },
});

/* 처음 화면에서 2번째 책부터 시작 */
swiper.slideToLoop(1, 0);
swiper2.slideToLoop(1, 0);
updateBookInfo(1);
