/*=================================
=            Variables            =
=================================*/
var landing = $('.container'),
    header = landing.find('.header_container'),
    sections = landing.find('section[data-section],footer[data-section]'),

    navLinks = header.find('.nav__link'),

    overlay = $('.overlay'),
    modals = $('.modal'),
    commendation = $('.modal__link[href="modal-commendation"]'),
    downloadedPresentation = $('.modal__link[href="modal-downloaded-presentation"]'),

    winPos,winHeight,landingHeight,prevModal;
console.log(winPos)

$(window).on('ready load scroll resize',function(e) {

  winPos = $(window).scrollTop();


  if (winPos > 0) {
    header.addClass('shadow');

  } else {
    header.removeClass('shadow');
  }

  if (e.type != 'scroll') {
    winHeight = $(window).outerHeight();
    landingHeight = (landing.outerHeight()).toFixed(0);
  }
});
