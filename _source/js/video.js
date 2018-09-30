/*=============================
=            Video            =
=============================*/
$('video').on('click',function() {

  var video = this,
      src = video.src;

  if (video.paused) {
    video.play();

  } else {
    video.pause();
  }

  $('video').each(function() {
    var other = this;

    if (!other.paused && other.src !== src) {
      other.pause();
    }
  });
});


$('video').on('play pause ended',function(e) {

  if (e.type == 'play') {
    $(this).attr('controls','').addClass('played');

  } else if (e.type == 'pause') {
    $(this).removeClass('played');

  } else {
    $(this).attr('src',this.src).removeAttr('controls');
  }
});


$('.svg--play').on('click',function() {
  $(this).prev().click();
});
