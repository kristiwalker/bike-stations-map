"use strict";

/*jshint esversion: 6 */
var interactive = {
  initScripts: function initScripts() {
    initMap();
  },
  initMap: function initMap() {
    console.log('i work!');
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fsa2Vya2QiLCJhIjoiY2puM2pnYTN1MGgzdzNwczB3Z3dzcTc4NiJ9._x2BubnJZmAn6S5qlyj07g';
    var map = new mapboxgl.Map({
      container: 'map',
      // container id
      style: 'mapbox://styles/mapbox/streets-v9',
      // stylesheet location
      center: [-74.50, 40],
      // starting position [lng, lat]
      zoom: 9 // starting zoom

    });
  }
};
$('document').ready(function () {
  interactive.initMap();
});