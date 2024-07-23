function miniMaxSum(arr) {
  let highestCombo = -Infinity
  let lowestCombo = Infinity
  let arrayTotal = arr.reduce((partialSum, value) => partialSum + value, 0)

  for (let i = 0; i < arr.length; i++) {
    let fourOnly = arrayTotal - arr[i];

    if (fourOnly < lowestCombo) {
      lowestCombo = fourOnly;
    }
    if (fourOnly > highestCombo) {
      highestCombo = fourOnly;
    }
  }
  console.log(lowestCombo + " " + highestCombo)
}

export default miniMaxSum
