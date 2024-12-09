/* =========================================================
    Testimonial Slider
=========================================================*/
$(document).ready(function () {
  $(".testimonial-slider").slick({
    infinite: true,
    dots: false,
    arrows: false,
    asNavFor: ".testimonial-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".testimonial-dots").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".testimonial-slider",
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0",
  });

  $(".custom-prev").click(function () {
    $(".testimonial-slider").slick("slickPrev");
  });

  $(".custom-next").click(function () {
    $(".testimonial-slider").slick("slickNext");
  });
});

/* =========================================================
    AOS
=========================================================*/
$(document).ready(function () {
  AOS.init({
    duration: 1000,
  });
});
