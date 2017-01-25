var initialize = function(){
  var centre = {lat: 51.5074, lng:-0.1278};
  var sherlock = {lat:51.523772, lng:-0.158538}
  var mapDiv = document.querySelector("#main-map");
  var mapZoom = 10;
  var mainMap = new MapWrapper(mapDiv, centre, mapZoom);
  var firstMarker = {lat: 85, lng: 0};
  var secondMarker = {lat: 85, lng: 0};
  mainMap.addMarker(centre);
  mainMap.addSetMarker(sherlock);

  var firstMapMarker = mainMap.addMarker(firstMarker);
  var secondMapMarker = mainMap.addMarker(secondMarker);

  var computeDistanceButton = document.querySelector("#compute-distance");
  computeDistanceButton.onclick = function(){
    console.log(firstMapMarker);
    latOne = firstMapMarker.getPosition().lat;
    lngOne = firstMapMarker.getPosition().lng;
    latTwo = secondMapMarker.getPosition().lat;
    lngTwo = secondMapMarker.getPosition().lng;
    console.log(latOne)
    firstMarker = {lat: latOne, lng: lngOne};
    console.log(firstMarker)
    secondMarker = {lat: latTwo, lng: lngTwo};
    mainMap.computeDistance(firstMarker, secondMarker)
  }

  var firstLocationButton = document.querySelector("#location-one");
  firstLocationButton.onclick = function(){
    mainMap.changeLocationMarker(firstMapMarker);
  }
  var secondLocationButton = document.querySelector("#location-two");
  secondLocationButton.onclick = function(){
    mainMap.changeLocationMarker(secondMapMarker);
  }

  var setMapCenter = function(){
    mainMap.googleMap.setCenter({lat:16.766589,lng:-3.002561});
    mainMap.googleMap.setZoom(10)
  }

  var getGeoLocation = function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      mainMap.googleMap.setCenter(pos);
    })
  }
  var locationButton = document.querySelector("#current-location")
  locationButton.onclick = getGeoLocation;

  var button = document.querySelector("#city-navigation")
  button.onclick = setMapCenter;

  
  // mainMap.addClickEvent();

}

window.onload = initialize