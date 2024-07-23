function caesarCipher(s, k) {
  let finalArray = []
  let alphabetArray = 'abcdefghijklmnopqrstuvwxyz'

  function isLetter(singleLetter) {
    return singleLetter.length === 1 && /[a-z]/i.test(singleLetter)
  }

  function isCapitalised(singleLetter) {
    return singleLetter.toUpperCase() === singleLetter
  }

  function shiftThemLetters(alphabetToBeShiftedAsArray) {
    for (let i = 0; i < alphabetToBeShiftedAsArray.length; i++) {
      let singleLetter = alphabetToBeShiftedAsArray[i]

      if (!isLetter(singleLetter)) {
        finalArray.push(singleLetter)
        continue
      }

      let initialNumericalLetterValue = alphabetArray.indexOf(
        singleLetter.toLowerCase()
      )
      let shiftedNumericalLetterValue = (initialNumericalLetterValue + k) % 26

      if (isCapitalised(singleLetter)) {
        finalArray.push(
          alphabetArray[shiftedNumericalLetterValue].toUpperCase()
        )
      } else {
        finalArray.push(alphabetArray[shiftedNumericalLetterValue])
      }
    }
  }

  shiftThemLetters(s.split(''))
  let finalString = finalArray.join('')
  return finalString
}

export default caesarCipher
