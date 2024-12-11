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

/* =========================================================
        Sticky Header
    =========================================================*/
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 0) {
    $(".header").addClass("sticky");
    $(".resp-none").addClass("scroll-none");
  } else {
    $(".header").removeClass("sticky");
    $(".resp-none").removeClass("scroll-none");
  }
});

$(document).ready(function () {
  $("#headerNavbarDropdown").on("show.bs.collapse", function () {
    // Change to close icon when expanded
    $("#menuIcon").removeClass("fa-bars").addClass("fa-xmark");
  });

  $("#headerNavbarDropdown").on("hide.bs.collapse", function () {
    // Change back to menu icon when collapsed
    $("#menuIcon").removeClass("fa-xmark").addClass("fa-bars");
  });
});
