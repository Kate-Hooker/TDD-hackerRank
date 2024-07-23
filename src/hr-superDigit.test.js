import superDigit from './hr-superDigit.js'


test('superDigit, input 24, returns 6', () => {
  //s = '12:01:00PM'
  //Return '12:01:00'.
  const inputValue = "24"
  const expectedResult = 6
  expect(superDigit(inputValue)).toBe(expectedResult)
})

test('superDigit, input 99, returns 9', () => {
  //s = '12:01:00PM'
  //Return '12:01:00'.
  const inputValue = "99"
  const expectedResult = 9
  expect(superDigit(inputValue)).toBe(expectedResult)
})

test('superDigit, input 1122, returns 6', () => {
  //s = '12:01:00PM'
  //Return '12:01:00'.
  const inputValue = "1122"
  const expectedResult = 6
  expect(superDigit(inputValue)).toBe(expectedResult)
})