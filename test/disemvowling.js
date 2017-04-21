import { expect } from 'chai'
import disemvowling from '../src/disemvowling'

describe('disemvowling()', () => {
  const str = 'I am a root node.'

  it('should return the string without any vowels or spaces', () => {
    expect(disemvowling(str)).to.equal('mrtnd.')
  })
})