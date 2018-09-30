/*==================================
=            Navigation            =
==================================*/
$(function() {

  var timer;

  $('.nav-link').on('click',function(e) {
    e.preventDefault();

    clearTimeout(timer);

    var nav = $('.nav');

    nav.show();
    header.addClass('nav-opened');
    setTimeout(function() {
      nav.addClass('active');
    });

    $('.nav-link-close').on('click',function(e) {
      e.preventDefault();

      nav.removeClass('active');
      header.removeClass('nav-opened scroll');

      timer = setTimeout(function() {
        nav.removeAttr('style');
      },400);
    });
  });


  navLinks.on('click',function(e) {
    e.preventDefault();

    var $this = $(this),
        href = $this.attr('href').replace('#',''),
        sectionPos = sections.filter('[data-section="' + href + '"]').offset().top;

    $('.nav-link-close').click();

    scrollBody(sectionPos,800);
  });


  function checkSection() {

    sections.each(function() {

      var $this = $(this),
          topEdge = $this.offset().top - 120,
          bottomEdge = topEdge + $this.outerHeight();

      if (winPos == 0) {
        $('.nav__item').removeClass('active');

      } else if (winPos + winHeight >= landingHeight) {
        addRem($('.nav__item').last());

      } else if (topEdge <= winPos && bottomEdge > winPos) {

        var section = $this.attr('data-section'),
            link = navLinks.filter('[href="#' + section + '"]');

        addRem(link.closest('.nav__item'));
      }
    });
  }

  $(window).on('scroll resize',function() {
    checkSection();
  });
});
