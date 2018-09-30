/*==================================
=            Validation            =
==================================*/
$('button[type="submit"]').on('click',function(e) {
  e.preventDefault();

  var $this = $(this),
      form = $this.closest('form'),
      inputs = form.find('input'),
      length = inputs.length,
      send = true;

  inputs.each(function() {

    var $this = $(this),
        value = $this.val(),
        name = $this.attr('name');

    if (value.length == 0 || $(this).hasClass('error') || name == 'privacy' && $this.prop('checked') == false) {

      if (value.length == 0) {
        $this.parent().addClass('empty');
      }

      if (name == 'privacy') {
        $this.parent().removeClass('error');
        setTimeout(function() {
          $this.parent().addClass('error');
        });

      } else {
        $this.addClass('error');
        form.find('.error:first').focus();
      }
      send = false;
    }
    length -= 1;
  });

  if (length == 0 && send) {

    form.submit();
  }
});


$('input').on('focus blur input',function(e) {

  var label = $(this).closest('label');

  if (e.type == 'focus') {
    label.addClass('focus');

  } else if (e.type == 'input') {
    label.removeClass('empty');

  } else {
    label.removeClass('focus');
  }
});


$('label .svg--error').on('click',function(e) {
  $(this).siblings('input').val('');
});


$('input[name="name"]').on('keyup click input change',function() {

  var $this = $(this),
      message = $this.siblings('.message'),
      value = $this.val(),
      length = value.length;

  if (length >= 2) {
    $this.removeClass('error').addClass('valid');

  } else if (length == 0) {
    $this.removeClass('valid error');

  } else {
    $this.removeClass('valid').addClass('error');
  }
});


$('input[type="email"]').on('keyup click input change',function(e) {

  var $this = $(this),
      label = $this.closest('label'),
      value = $this.val(),
      length = value.length,

      dog = value.indexOf('@') + 1,
      dot = value.indexOf('.') + 1,
      last = value.substr(length - 1);

  if (length >= 5 && dog >= 2 && dot >= 5 && last != '.' && last != '@') {
    $this.removeClass('error').addClass('valid');

  } else if (length == 0) {
    $this.removeClass('valid error');

  } else {
    $this.removeClass('valid').addClass('error');
  }
});


$('input[type="phone"]').on('keyup click input change',function() {

  var $this = $(this),
      value = $this.val(),
      length = value.length,
      newVal;

  if (this.value.match(/[^0-9+)–()_ -]/g)) {
      this.value = this.value.replace(/[^0-9+)–()_ -]/g, '');
  }
  if (length > 22) {
    newVal = value.substring(0,22);
    $this.val(newVal);
  }

  if (length >= 6) {
    $this.removeClass('error').addClass('valid');

  } else if (length == 0) {
    $this.removeClass('valid error');

  } else {
    $this.removeClass('valid').addClass('error');
  }
});


$('input[data-input="numbers"]').on('keyup click input change',function(e) {

  var $this = $(this),
      label = $this.parent(),
      value = $this.val(),
      length = value.length,
      maxLength = Number($this.attr('data-maxlength')),
      newVal;

  label.removeClass('not-number');

  if (length > maxLength) {
    newVal = value.substring(0,maxLength);
    $this.val(newVal);
  }

  if (length >= 1) {
    $this.removeClass('error').addClass('valid');

  } else if (length == 0) {
    $this.removeClass('valid error');

  } else {
    $this.removeClass('valid').addClass('error');
  }

  if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
      label.addClass('not-number');
      $this.removeClass('valid').addClass('error');
  }
});


$('input[type="checkbox"]').on('click',function() {
  $(this).parent().removeClass('error');
});
