function matchingStrings(strings, queries) {
  let finalArray = [];

  const countSubstrings = (strings, query) => {
    let count = 0;
    for (let str of strings) {
      if (str === query) {
        count++;
      }
    }
    return count;
  };

  for (let i = 0; i < queries.length; i++) {
    finalArray.push(countSubstrings(strings, queries[i]));
  }

  return finalArray;
}


export default matchingStrings