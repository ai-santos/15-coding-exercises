import { expect } from 'chai'
import Lairotcaf from '../src/Lairotcaf'

describe('Lairotcaf()', () => {
  it('should return the inverse factorial of 720', () => {
    expect(Lairotcaf(720)).to.equal('6!')
  })

  it('should return the inverse factorial of 5040', () => {
    expect(Lairotcaf(5040)).to.equal(7)
  })

  it('should return NONE when factorializing a non-whole-number result', () => {
    expect(Lairotcaf(12)).to.equal('NONE')
  })
})