const hoods = require('./')
const assert = require('assert')

var hood = hoods(-90.132093, 29.934436)[0]

assert.equal(hood.name, 'Black Pearl')
assert.equal(hood.city, 'New Orleans')
assert.equal(hood.county, 'Orleans')
assert.equal(hood.state, 'LA')
assert(hood.region_id)
assert(hood.geometry)
