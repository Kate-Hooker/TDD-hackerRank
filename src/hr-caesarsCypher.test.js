import caesarCipher from './hr-caesarsCypher'


test('caesarCipher, input "abcdefghijklmnopqrstuvwxyz", +3, "defghijklmnopqrstuvwxyzabc"', () => {
  const inputValue = "abcdefghijklmnopqrstuvwxyz";
  const shift = 3;
  const expectedResult = "defghijklmnopqrstuvwxyzabc";
  expect(caesarCipher(inputValue, shift)).toBe(expectedResult);
});

// check inputs