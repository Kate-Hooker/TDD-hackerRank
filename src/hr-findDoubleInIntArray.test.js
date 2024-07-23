import lonelyinteger from "./hr-findDoubleInIntArray";


test('lonelyInteger, input [1,1,2], returns 2', () => {

  const inputValue = [1,1,2]
  const expectedResult = 2
  expect(lonelyinteger(inputValue)).toBe(expectedResult)
})

test('lonelyInteger, input [1,1,1,1,1,1,1,2], returns 2', () => {

  const inputValue = [1,1,1,1,1,1,2]
  const expectedResult = 2
  expect(lonelyinteger(inputValue)).toBe(expectedResult)
})

test('lonelyInteger, input [1,1,1,1,1,1,1,2,1,1,1,1,1], returns 2', () => {

  const inputValue = [1,1,1,1,1,1,1,2,1,1,1,1,1]
  const expectedResult = 2
  expect(lonelyinteger(inputValue)).toBe(expectedResult)
})

