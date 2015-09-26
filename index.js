const turf = require('turf')
const assert = require('assert')
const flatten = require('lodash.flatten')
const states = require('require-dir')('./data')

module.exports = function hoods (lng, lat) {
  assert(lng, 'lng is required')
  assert(lat, 'lat is required')

  const point = turf.point([lng, lat])

  return flatten(
    Object.keys(states).map(function (abbr) {
      return states[abbr].features
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
    })
  )
}
