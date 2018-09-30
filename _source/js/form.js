/*============================
=            Form            =
============================*/
$('form').on('submit',function() {

  var $this = $(this),
      inputs = $this.find('input'),
      button = $this.find('button'),
      modal = $this.closest('.modal').attr('data-modal');

  button.prop('disabled',true);

  $.ajax({
    type: 'POST',
    url: 'ajax/mail.php',
    data: $this.serialize(),
    success: function() {

      if (modal == 'presentation') {

        var link = document.createElement('a');
        link.setAttribute('href','files/pdf/presentation.pdf');
        link.setAttribute('download','Презентация - SomeSite.pdf');

        downloadedPresentation.click();

        setTimeout(function() {
          link.click();
        },1000);

      } else {
        commendation.click();
      }
    },
    error: function(){
      alert('Ошибка! Сообщение не отправлено.');
    }
  }).done(function () {

    setTimeout(function () {
      $this.trigger("reset");
      button.prop('disabled', false);
      inputs.removeClass('error valid');
    }, 1000);
  });
  return false;
});
