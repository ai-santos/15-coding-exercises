import { expect } from 'chai'
import stringIndices from '../src/stringIndices'

describe('stringIndices()', () => {
  const str = 'I am a root node.'

  it('Should return the string of a proper index', () => {
    expect(stringIndices(str, 1)).to.equal('I')
    expect(stringIndices(str, 2)).to.equal('am')
    expect(stringIndices(str, 3)).to.equal('a')
  })

  it('Should return empty string if passed out of bounds index', () => {
    expect(stringIndices(str, 6)).to.equal('')
  })

  it('Should return empty string if passed a negative index', () => {
    expect(stringIndices(str, -1)).to.equal('')
  })
})