import MockDate from 'mockdate'

import * as tools from '@/ex10/helpers/tools'

describe('Testing tools', () => {
  beforeAll(() => {
    MockDate.set(new Date('1994-07-05'))
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('Given a release date less than one year, when calling hasLessThanOneYear, then returns true', () => {
    expect(tools.hasLessThanOneYear(new Date('1994-01-01'))).toBe(true)
  })

  it('Given a release date more than one year, when calling hasLessThanOneYear, then returns false', () => {
    expect(tools.hasLessThanOneYear(new Date('1990-01-01'))).toBe(false)
  })
})
