# Mapbox Draw Static Mode

This is a custom mode for [@mapbox/mapbox-gl-draw](https://github.com/mapbox/mapbox-gl-draw) that displays data stored in Draw but does not let the user interact with it.

This mode used to be one of the core modes prior to the `v1.0.0` release of Mapbox Draw.

## Usage

To install:

`npm i @mapbox/mapbox-gl-draw-static-mode`

To add to MapboxDraw:

```js
var StaticMode = require('@mapbox/mapbox-gl-draw-static-mode');

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v8',
  center: [40, -74.50],
  zoom: 9
});

var modes = MapboxDraw.modes;
modes.static = StaticMode;
var Draw = new MapboxDraw({ modes: modes });

map.addControl(Draw)

map.on('load', function() {
  Draw.changeMode('static');
});
```


