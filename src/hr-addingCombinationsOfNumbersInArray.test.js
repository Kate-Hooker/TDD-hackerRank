import miniMaxSum from "./hr-addingCombinationsOfNumbersInArray";

test('calculating highest possible combo of numbers in a array, input [0,0,0,0,5], returns 5', () => {

  const inputValue = [0,0,0,0,5]
  const expectedResult = '0 5'
  expect(miniMaxSum(inputValue)).toBe(expectedResult)
})

test('calculating highest possible combo of numbers in a array, input [1,1,1,2,1], returns 00:01:00', () => {
 
  const inputValue = [1,1,1,2,1]
  const expectedResult = '4 5'
  expect(miniMaxSum(inputValue)).toBe(expectedResult)
})