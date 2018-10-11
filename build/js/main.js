/*jshint esversion: 6 */
const app = {
    map: '',
    initScripts() {
        app.getData();
    },
    getData() {
        $.getJSON('data/stations.json', function(data) {
            let stations = data;

            app.initMap(stations);
        });
    },
    initMap(data) {
        mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fsa2Vya2QiLCJhIjoiY2puM2pnYTN1MGgzdzNwczB3Z3dzcTc4NiJ9._x2BubnJZmAn6S5qlyj07g';
        var map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/outdoors-v9",
            center: [-118, 34], // starting position [lng, lat]
            zoom: 10
        });

        map.on("load", function() {
            map.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": data
                },
                "layout": {
                    "icon-image": "{icon}-15",
                    "text-field": "{title}",
                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                    "text-offset": [0, 0.6],
                    "text-anchor": "top"
                }
            });
        });
    }
};

$('document').ready(function() {
    app.initScripts();
});
