# hoods

Give me a lat/lng and I'll give you a neighborhood.

See [hoods-as-a-service.herokuapp.com](https://hoods-as-a-service.herokuapp.com) for examples and an HTML5 geolocation demo.

## Notes

- This module doesn't make any network requests.
- All the data is in the module itself. It's under 50MB.
- The neighborhoods boundary data comes from [Zillow](http://www.zillow.com/howto/api/neighborhood-boundaries.htm).
- Data was converted from shapefiles to GeoJSON using [gdal](http://ben.balter.com/2013/06/26/how-to-convert-shapefiles-to-geojson-for-use-on-github/).
- The point-in-polygon function is powered by [turf](http://turfjs.org/static/docs/module-turf_inside.html).
- If the given point is in more than one neighborhood, all matches are returned.
- Data is only for US

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install hoods --save
```

## Usage

```js
const hoods = require("hoods")
const assert = require('assert')

var hood = hoods(-90.132093, 29.934436)[0]

assert.equal(hood.name, 'Black Pearl')
assert.equal(hood.city, 'New Orleans')
assert.equal(hood.county, 'Orleans')
assert.equal(hood.state, 'LA')
assert(hood.region_id)
assert(hood.geometry)

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [lodash.flatten](https://github.com/lodash/lodash): The modern build of lodash’s `_.flatten` as a module.
- [require-dir](https://github.com/aseemk/requireDir): Helper to require() directories.
- [turf](https://github.com/turfjs/turf): a node.js library for performing geospatial operations with geojson

## Dev Dependencies

- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [standard](https://github.com/feross/standard): JavaScript Standard Style


## License

MIT

Special thanks to Zillow for the data and Mapbox for guidance.

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
