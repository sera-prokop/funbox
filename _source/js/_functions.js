/*=================================
=            Functions            =
=================================*/
function addRem(e) {
  e.addClass('active').siblings().removeClass('active');
}


function scrollBody(e,t) {
  $('html,body').stop().animate({scrollTop: e},t);
}
