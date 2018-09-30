/*=====================================
=            Scroll Button            =
=====================================*/
$('a[href*="scroll-to"]').on('click',function(e) {
  e.preventDefault();

  var dataSection = $(this).attr('href').replace('scroll-to-',''),
      section = sections.filter('[data-section="' + dataSection + '"]'),
      sectionPos = section.offset().top;

  scrollBody(sectionPos,800);
});
