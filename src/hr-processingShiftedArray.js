function minimumBribes(q) {
  let bribes = 0

  for (let i = 0; i < q.length; i++) {
     
      if (q[i] - (i + 1) > 2) {
          console.log("Too chaotic")
          return
      }

      
      for (let j = Math.max(0, q[i] - 2); j < i; j++) {
          if (q[j] > q[i]) {
              bribes++
          }
      }
  }

  console.log(bribes)
.}
// if next number i+1 is more than q[i]+1 then bribes++ 

//[1,2,3,5,4,6,7,8], returns 1
//[4,1,2,3,5,6,7,8], returns Too chaoitc
//[3,1,2,5,4,6,7,8] returns 2
//[1,2,4,3,5,7,6,8], returns 2

// make a loop that compares difference between next two numbers - count ++, if count > 2 return too chaotic

export default minimumBribes