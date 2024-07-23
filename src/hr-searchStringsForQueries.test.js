import matchingStrings from './hr-searchStringsForQueries'

describe('matchingStrings', () => {
  test('returns correct counts for given strings and inquiries', () => {
    const strings = ['aba', 'baba', 'aba', 'xzxb']
    const inquiries = ['aba', 'xzx', 'bab']

    const result = matchingStrings(strings, inquiries)

    expect(result).toEqual([2, 0, 0])
  })

  test('matchingStrings, input [aba, baba, aba, xzxb], [aba, xzx, bab], returns [2, 0, 0]', () => {
    const strings = ['aba', 'baba', 'aba', 'xzxb']
    const inquiries = ['aba', 'xzx', 'bab']
    const expectedResult = [2, 0, 0]
    expect(matchingStrings(strings, inquiries)).toEqual(expectedResult)
  })

  test('matchingStrings, input [def, de, fgh],[de, lmn, def], returns [1,0,1]', () => {
    const strings = ['def', 'de', 'fgh']
    const inquiries = ['de', 'lmn', 'def']
    const expectedResult = [1, 0, 1]
    expect(matchingStrings(strings, inquiries)).toEqual(expectedResult)
  })
})
