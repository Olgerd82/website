const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
  on: {
    init: function () {
      playActiveVideo(this);
    },
    slideChange: function () {
      playActiveVideo(this);
    },
  },
});

function playActiveVideo(swiperInstance) {
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach((video, index) => {
    if (index === swiperInstance.realIndex) {
      video.currentTime = 0;
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  });
}
