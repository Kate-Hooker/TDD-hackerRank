import { render, screen } from '@testing-library/react'
import timeConversion from './hr-timeConversion'

test('time conversion, input 12:01:00PM, returns 12:01:00', () => {
  //s = '12:01:00PM'
  //Return '12:01:00'.
  const inputValue = '12:01:00PM'
  const expectedResult = '12:01:00'
  expect(timeConversion(inputValue)).toBe(expectedResult)
})

test('time conversion, input 12:01:00PM, returns 00:01:00', () => {
  //s='12:01:00AM'
  //Return '00:01:00'.
  const inputValue = '12:01:00AM'
  const expectedResult = '00:01:00'
  expect(timeConversion(inputValue)).toBe(expectedResult)
})

test('time conversion, input 07:05:45PM, returns 19:05:45', () => {
  /**s='07:05:45PM'
Return '19:05:45'
 */
  const inputValue = '07:05:45PM'
  const expectedResult = '19:05:45'
  expect(timeConversion(inputValue)).toBe(expectedResult)
})

test('time conversion, input 07:05:45PM, returns 19:05:45', () => {
  /**s='07:05:45PM'
Return '19:05:45'
 */
  const inputValue = '07:06:45PM'
  const expectedResult = '19:06:45'
  expect(timeConversion(inputValue)).toBe(expectedResult)
})

test('time conversion, negative, input anything, doesnt return 1', () => {
  /**s='07:05:45PM'
Return '19:05:45'
 */
  const inputValue = '07:05:45PM'
  const expectedResult = '19:05:45'
  expect(timeConversion(inputValue)).not.toBe(1)
})
