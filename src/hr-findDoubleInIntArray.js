function lonelyinteger(a) {
  // Write your code here

  let lonelyInt = 0

  for (let i = 0; i < a.length; i++) {
    const count = a.filter((element) => element === a[i]).length

    if (count === 1) {
      lonelyInt = a[i]
      break
    }
  }

  return lonelyInt
}

// takes an array of numbers where one nuymber is used only used once -what number is used twice?

// split array
// for loop with a nested loop and compare to
export default lonelyinteger
