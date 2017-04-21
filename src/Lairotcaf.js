const reverseFactorial = (num) => {
  let input = num
  if(num === 0 || num === 1) {
    return 1
  } else if(num === 2) {
    return 2
  } else {
      let positiveInts = [2,3,4,5,6,7,8,9,10]
      for(let i = 0; i < positiveInts.length; i++) {
        let result = num / positiveInts[i]
        if(result === 1) {
          console.log(positiveInts[i] + '!')
          break
        } else if(result < 1) {
          console.log(input + ' NONE')
          break
        }
        num = result
      }
  }
}