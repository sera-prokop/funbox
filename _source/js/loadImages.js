/*===================================
=            Load Images            =
===================================*/
$(window).on('load',function() {
  loadImages();
});


function loadImages() {
  $('img[data-src]').each(function() {

    var $this = $(this),
        src = $this.attr('data-src'),
        img = new Image();

    if (!$this.hasClass('owl-lazy')) {

      img.src = src;

      img.onload = function() {
        $this.removeAttr('data-src').attr('src',src);
      };
    }
  });
}
