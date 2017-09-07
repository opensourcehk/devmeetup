var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            // Using OpenStreetMap to show a map
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        // Hong Kong 10/22.3799/114.1617
        // Set the default center of the map view
        //center: ol.proj.fromLonLat([0, 0]),
        center: ol.proj.fromLonLat([114.1617, 22.3799]),
        // Set default zoom
        //zoom: 4
        zoom: 10,
    })
});
