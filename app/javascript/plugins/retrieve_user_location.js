// // watchPosition locates the users current position
// // It registers a handler function that will be called automatically
// // each time the position of the device changes, returning the updated function
import { initMapbox } from './init_mapbox';

function success(pos) {
  var crd = pos.coords;
  let lat = crd.latitude;
  let long = crd.longitude;
  let coordinates = {
    lat: lat,
    long: long
  }
  // console.log(`Latitude: ${lat} Longitude: ${long}`);
  initMapbox(coordinates);
}

function error(err) {
  console.warn('ya buggered up');
}

function getLocation() {
  var options = {
    enableHighAccuracy: true,
  }
  let id = navigator.geolocation.watchPosition(success, error, options);
}

export { getLocation, success };