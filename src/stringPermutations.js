const stringPermutation = (str) => {
  if (str.length < 2) return string
  const permutations = []
  for(let i = 0; i < str.length; i++) {
    let char = str[i]
    if(str.indexOf(char) !== i)
      continue;
    let remainingString = str.slice(0, i) + str.slice(i + 1, str.length)
    for(let subPermutation of permut(remainingString))
      permutations.push(char + subPermutation)
  }
  return permutations
}

const permutations = permut('car');
for (permutation of permutations) {
  console.log(permutation)
}