import { expect, it, describe } from 'vitest'

import formatNumpadInput from './formatNumpadInput' // Adjust the import path

describe('formatNumpadInput', () => {
  it('should handle decimal point input', () => {
    expect(formatNumpadInput('123', '.')).toBe('123.')
  })

  it('should not add decimal point when its already decimal', () => {
    expect(formatNumpadInput('0.1', '.')).toBe('0.1')
  })

  it('should handle backspace', () => {
    expect(formatNumpadInput('123.45', '<')).toBe('123.4')
  })

  it('should return 0 if backspace on length-1 number', () => {
    expect(formatNumpadInput('7', '<')).toBe('0')
  })

  it('should handle number input', () => {
    expect(formatNumpadInput('123', '4')).toBe('1234')
  })

  it('should just return input when the value is 0', () => {
    expect(formatNumpadInput('0', '1')).toBe('1')
  })

  it('should not handle input when the length of fractional part is equal or greater than 3', () => {
    expect(formatNumpadInput('123.456', '7')).toBe('123.456')
  })
})
