$(document).ready(function () {

  // Navbar Section Mobile Hamburger Menu
  $(".nav-button").click(function () {
    $(this).toggleClass("change");
  });

  $(window).scroll(function () {

    let position = $(this).scrollTop();
    var a = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("custom-navbar");
    } else {
      $(".nav-menu").removeClass("custom-navbar");
    }

    // Mission Section Effects
    if (position >= 650) {
      $('.camera-img').addClass("from-left");
      $(".mission-text").addClass("from-right");
    } else {
      $('.camera-img').removeClass("from-left");
      $(".mission-text").removeClass("from-right");
    }

    // Pricing Section Effects
    if (position >= 4300) {
      $(".card-1").addClass("move-from-left");
      $(".card-2").addClass("move-from-bottom");
      $(".card-3").addClass("move-from-right");
    } else {
      $(".card-1").removeClass("move-from-left");
      $(".card-2").removeClass("move-from-bottom");
      $(".card-3").removeClass("move-from-right");
    }

  });


  // Gallery Section
  $(".gallery-list-item").click(function () {

    $(this).addClass("active-item").siblings().removeClass("active-item");

    let value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show(300);
    } else {
      $(".filter").not("." + value).hide();
      $(".filter").filter("." + value).show(300);
    }
  });



  // Dynamic Footer Year
  $('#year').text(new Date().getFullYear());

  // Init Scroolspy
  $('body').scrollspy({ target: '#main-nav' });

  //Animate Scrool
  $('#main-nav a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });


});
