/* eslint-env jasmine */

const expect = require('expect')

const generator = require('../lib')

describe('generator', () => {
  describe('generate', () => {
    it('should generate unique element IDs', () => {
      const expected = require('./expected/ids')
      const actual = []

      for (let i = 1; i <= 36; i++) {
        actual.push(generator.generate())
      }

      expect(actual).toEqual(expected)
    })
  })
})
