import minimumBribes from "./hr-processingShiftedArray"

test('minimumBribes, input [1,2,3,5,4,6,7,8], returns 1', () => {

  const inputValue = [1,2,3,5,4,6,7,8]
  const expectedResult = 1
  expect(minimumBribes(inputValue)).toBe(expectedResult)
})

test('minimumBribes prints Too chaotic if theres too many bribes, input [4,1,2,3,5,6,7,8], returns Too chaoitc', () => {

  const inputValue = [4,1,2,3,5,6,7,8]
  const expectedResult = 'Too chaotic'
  expect(minimumBribes(inputValue)).toBe(expectedResult)
})

test('minimumBribes handles multiple bribes, input [1,2,4,3,5,7,6,8], returns 2', () => {

  const inputValue = [1,2,4,3,5,7,6,8]
  const expectedResult = 2
  expect(minimumBribes(inputValue)).toBe(expectedResult)
})