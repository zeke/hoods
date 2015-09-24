const hoods = require('./')
const assert = require('assert')

let hood = hoods(-122.446747, 37.733795)[0]

assert.equal(hood.name, 'Outer Mission')
assert.equal(hood.city, 'San Francisco')
assert.equal(hood.county, 'San Francisco')
assert.equal(hood.state, 'CA')
assert(hood.region_id)
assert(hood.geometry)
