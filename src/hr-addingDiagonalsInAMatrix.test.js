import diagonalDifference from './hr-addingDiagonalsInAMatrix'

test('diagonalDifference, input [[11,2,4][4,5,6][10,8,-12]] returns 15', () => {
  const inputValue = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]
  const expectedResult = 15
  expect(diagonalDifference(inputValue)).toBe(expectedResult)
})

test('diagonalDifference, input [[1,2,3][4,5,6][7,8,9]] returns 1', () => {
  const inputValue = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const expectedResult = 0
  expect(diagonalDifference(inputValue)).toBe(expectedResult)
})
