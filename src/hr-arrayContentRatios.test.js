import plusMinus from './hr-arrayContentRatios'

test('caculates ratios of +ve and -ve ints in array, input [1,1,0,-1,-1], returns 0.400000, 0.400000, 0.200000', () => {
  const inputValue = [1, 1, 0, -1, -1]
  const output = plusMinus(inputValue)
  const expectedResult = ['0.400000', '0.400000', '0.200000']
  expect(output).arrayContaining(expectedResult)
})

test('caculates ratios of +ve and -ve ints in array, input [-4, 3, -9, 0, 4, 1], returns 0.500000, 0.333333, 0.166667', () => {
  const inputValue = [-4, 3, -9, 0, 4, 1]
  const expectedResult = ['0.500000', '0.333333', '0.166667']
  expect(plusMinus(inputValue)).toBe(expectedResult)
})

test('ratios of ints in array, input [-4, 3, -9, 0, 4, 1], returns 0.500000, 0.333333, 0.166667', () => {
  console.log = jest.fn()

  const inputValue = [-4, 3, -9, 0, 4, 1]
  const expectedResult = ['0.500000', '0.333333', '0.166667']
  expect(plusMinus(inputValue)).toBe(expectedResult)

  expect(console.log).toHaveBeenCalledWith('0.500000')
  expect(console.log).toHaveBeenCalledWith('0.333333')
  expect(console.log).toHaveBeenNthCalledWith('0.166667')
})
