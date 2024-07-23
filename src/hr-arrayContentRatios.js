function plusMinus(arr) {
  // Write your code here

  let positive = 0;
  let neutral = 0;
  let negative = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] === 0) {
      neutral++;
    } else {
      negative++;
    }
  }

  

  const total = arr.length;

  let positives = (positive / total).toFixed(6)
  let negatives  = (negative / total).toFixed(6)

let neutrals = (neutral / total).toFixed(6)

  console.log(positives);
  console.log(negatives)
  console.log(neutrals)
 // console.log((negative / total).toFixed(6));
 // console.log((neutral / total).toFixed(6));

  

  return [positives, negatives, neutrals]
  

}

export default plusMinus