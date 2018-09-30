/*==============================
=            Modals            =
==============================*/
$('a[href*="modal"]').on('click',function(e) {
  e.preventDefault();

  var modal = modals.filter('[data-modal="' + $(this).attr('href').replace('modal-','') + '"]'),
      otherModal = modal.siblings('.modal');

  overlay.fadeIn(300,function() {

    modal.addClass('active').animate({ opacity: 1, top: '50%' },200);
    otherModal.removeClass('active').removeAttr('style');
  });
});


$('.modal__close,.overlay').on('click',function() {

  modals.filter('.active').animate({ opacity: 0, top: '45%' },200,function() {

    $(this).removeClass('active').removeAttr('style');
    overlay.fadeOut(300);
  });
});


$(document).on('keydown',function(e) {

  if (e.which === 27) {
    modals.filter('.active').find('.modal__close').click();
  }
});
