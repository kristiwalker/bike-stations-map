/*jshint esversion: 6 */
const app = {
    initScripts() {
        app.getData();
    },
    getData() {
        $.getJSON('data/stations.geojson', function(data) {
            let stations = data;

            app.initMap(stations);
        });
    },
    initMap(data) {
        mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fsa2Vya2QiLCJhIjoiY2puM2pnYTN1MGgzdzNwczB3Z3dzcTc4NiJ9._x2BubnJZmAn6S5qlyj07g';

        // draw map base
        var map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/light-v9",
            center: [-118.243683, 34.052235], // starting position [lng, lat]
            zoom: 12
        });

        // add markers to map
        data.features.forEach(function(marker) {
          // create a HTML element for each feature
          let el = document.createElement('div');
          el.className = 'marker';

          // make a marker for each feature and add to the map
          new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
        });
    },
};

$('document').ready(function() {
    app.initScripts();
});
