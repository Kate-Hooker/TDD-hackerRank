function diagonalDifference(arr) {
  let leftDiagonalTotal = 0;
  let rightDiagonalTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonalTotal += arr[i][i];
    rightDiagonalTotal += arr[i][arr.length - 1 - i];
  }

  return Math.abs(leftDiagonalTotal - rightDiagonalTotal);
}

// make a loop that adds first number
// then 0+1 etc until it breaks at arr.length

export default diagonalDifference