(function ($) {
  "use strict";
  var cfg = {
      scrollDuration: 800, // smoothscroll duration
      mailChimpURL: "", // mailchimp url
    },
    $WIN = $(window);

  // Add the User Agent to the <html>
  // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
  var doc = document.documentElement;
  doc.setAttribute("data-useragent", navigator.userAgent);

  /* Move header
   * -------------------------------------------------- */
  var ssMoveHeader = function () {
    var hero = $(".page-hero"),
      hdr = $("header"),
      triggerHeight = hero.outerHeight() - 170;

    $WIN.on("scroll", function () {
      var loc = $WIN.scrollTop();

      if (loc > triggerHeight) {
        hdr.addClass("sticky");
      } else {
        hdr.removeClass("sticky");
      }

      if (loc > triggerHeight + 20) {
        hdr.addClass("offset");
      } else {
        hdr.removeClass("offset");
      }

      if (loc > triggerHeight + 150) {
        hdr.addClass("scrolling");
      } else {
        hdr.removeClass("scrolling");
      }
    });

    // $WIN.on('resize', function() {
    //     if ($WIN.width() <= 768) {
    //             hdr.removeClass('sticky offset scrolling');
    //     }
    // });
  };

  /* Mobile Menu
   * ---------------------------------------------------- */
  var ssMobileMenu = function () {
    var toggleButton = $(".header-menu-toggle"),
      nav = $(".header-nav-wrap");

    toggleButton.on("click", function (event) {
      event.preventDefault();

      toggleButton.toggleClass("is-clicked");
      nav.slideToggle();
    });

    if (toggleButton.is(":visible")) nav.addClass("mobile");

    $WIN.on("resize", function () {
      if (toggleButton.is(":visible")) nav.addClass("mobile");
      else nav.removeClass("mobile");
    });

    nav.find("a").on("click", function () {
      if (nav.hasClass("mobile")) {
        toggleButton.toggleClass("is-clicked");
        nav.slideToggle();
      }
    });
  };
  /* Initialize
   * ------------------------------------------------------ */
  (function ssInit() {
    ssMoveHeader();
    ssMobileMenu();
  })();
})(jQuery);
