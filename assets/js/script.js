$(document).ready(function () {
  $("#selling").owlCarousel({
    item: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoWidth: true,
    responsiveClass: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
        margin: 20,
      },
    },
  });

  $("#sabaw").owlCarousel({
    item: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoWidth: true,
    responsiveClass: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
        margin: 20,
      },
    },
  });

  var swiper2 = new Swiper("#hotOffer", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    loopedSlides: 4,
  });

  var swiper2 = new Swiper("#special", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    loopedSlides: 4,
  });
});
