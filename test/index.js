/* globals describe, it */

const hoods = require('..')
const assert = require('assert')

describe('hoods', function () {
  it('works in San Francisco', function () {
    var hood = hoods(-122.446747, 37.733795)[0]
    assert.equal(hood.name, 'Outer Mission')
    assert.equal(hood.city, 'San Francisco')
    assert.equal(hood.county, 'San Francisco')
    assert.equal(hood.state, 'CA')
    assert(hood.region_id)
    assert(hood.geometry)
  })


  it('works in New Orleans', function () {
    var hood = hoods(-90.132093, 29.934436)[0]
    assert.equal(hood.name, 'Black Pearl')
    assert.equal(hood.city, 'New Orleans')
    assert.equal(hood.county, 'Orleans')
    assert.equal(hood.state, 'LA')
    assert(hood.region_id)
    assert(hood.geometry)
  })

  it('returns an empty array if no results are found', function () {
    assert.equal(hoods(-89.896660, 29.038574).length, 0)
  })

})
