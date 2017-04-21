const strIndices = (string, index) => {
  let strArray = string.split(' ')
  strArray.unshift('')
  if(index < 0) {
    return ''
  }
  if(index > strArray.length - 1) {
    return ''
  }
  for(let i = 0; i < strArray.length; i++) {
    if(strArray.length) {
      let index = i
    }
    return strArray[index]
  }
}

export default strIndices