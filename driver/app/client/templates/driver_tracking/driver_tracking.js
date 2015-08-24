/*****************************************************************************/
/* DriverTracking: Event Handlers */
/*****************************************************************************/
Template.DriverTracking.events({
  'click #googleMap':function(){
    initialize();
  }
});
function initialize() {
  if(!!navigator.geolocation) {
    var map;

    var mapOptions = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

    navigator.geolocation.getCurrentPosition(function(position) {

      var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      map.setCenter(geolocate);
      var marker = new google.maps.Marker({
        position: geolocate,
      });
      marker.setMap(map);
    });
  }else{
    alert('your browser not support')
  }
}
/*****************************************************************************/
/* DriverTracking: Helpers */
/*****************************************************************************/
Template.DriverTracking.helpers({
});

/*****************************************************************************/
/* DriverTracking: Lifecycle Hooks */
/*****************************************************************************/
Template.DriverTracking.onCreated(function () {

//  google.maps.event.addDomListener(window, 'load', initialize);
});

Template.DriverTracking.onRendered(function () {

});

Template.DriverTracking.onDestroyed(function () {
});
