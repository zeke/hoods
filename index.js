const turf = require('turf')
const assert = require('assert')
const CA = require('./data/ca.json')

module.exports = function hoods (lng, lat) {

  assert(lng, 'lng is required')
  assert(lat, 'lat is required')

  var point = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [lng, lat]
    }
  }

  return CA.features
    .filter(function (hood) {
      return turf.inside(point, hood)
    })
    .map(function (hood) {
      return {
        name: hood.properties.NAME,
        city: hood.properties.CITY,
        county: hood.properties.COUNTY,
        state: hood.properties.STATE,
        region_id: hood.properties.REGIONID,
        geometry: hood.geometry
      }
    })
}
