import { expect } from 'chai'
import stringMeAlong from '../src/stringMeAlongAlong'

describe('stringMeAlong()', () => {
  it('should print correct characters with first example.', () => {
    expect(stringMeAlong('abcabcbb', 2)).to.equal('ab')
  })
})