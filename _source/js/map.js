/*===========================
=            Map            =
===========================*/
$(function() {

  var center = { lat: 0, lng: 0 },
      markPos = { lat: 0, lng: 0 },
      zoom = 1,
      map,marker;


  function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: zoom
    });

    // marker = new google.maps.Marker({
    //   position: markPos,
    //   map: map,
    //   title: 'Какой-то адрес',
    //   icon: 'img/placemark.png'
    // });
  }
  // initMap();

  $('.contacts__close').on('click',function() {
    $(this).parent().toggleClass('closed');
  });
});
