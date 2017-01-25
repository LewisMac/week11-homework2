var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

var infowindow = new google.maps.InfoWindow({
  content: "Hey there"
});

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: coords,
      map: this.googleMap,
      draggable:true
    });
    return marker;
  },

  addSetMarker: function(coords){
    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: coords,
      map: this.googleMap,
      draggable: false
    });
    marker.addListener("click", function() {
      infowindow.open(this.googleMap, marker);
    });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
      var latitude = event.latLng.lat();
      var longitude = event.latLng.lng();
      var coords = {lat: latitude, lng: longitude}
      this.addMarker(coords);
    }.bind(this));
  },

  changeLocationMarker: function(marker){
    var marker = marker;
    google.maps.event.addListenerOnce(this.googleMap, "click", function(event){
      console.log(marker);
      var latitude = event.latLng.lat();
      var longitude = event.latLng.lng();
      var coords = {lat: latitude, lng: longitude}
      marker.setPosition(coords);
    }.bind(this));
  },
  computeDistance: function(coordsOne, coordsTwo){
    console.log(coordsOne);
    console.log(coordsTwo);
    return google.maps.geometry.spherical.computeDistanceBetween(coordsOne, coordsTwo);
  }
}


