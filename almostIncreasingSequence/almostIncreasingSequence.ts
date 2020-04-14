const almostIncreasingSequence = (sequence: number[]): boolean => {
//  const isIncreasing = (sequence: number[]): boolean => sequence.reduce((acc: boolean, val: number, index: number) => {
//    if(index !== sequence.length - 1) {
//      acc = sequence[index] < sequence[index + 1] ? true : false
//    }
//    return acc 
//  }, false)
//  
//  return sequence.reduce((acc: boolean, val: number, index: number) => {
//    if (acc === false) {
//      acc = isIncreasing(sequence.filter((x: number, i: number) => i !== index))
//    }
//    return acc
//  }, false)
  
  let nonIncreasingCount = 0
  
  for(let i = 0; i < sequence.length; i++) {
    if(sequence[i] <= sequence[i - 1]) {
      nonIncreasingCount++
      if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i-1]) {
        return false
      }
    }
  }
  
  return nonIncreasingCount <= 1
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// false

console.log(almostIncreasingSequence([1, 3, 1, 1])) 
// false

console.log(almostIncreasingSequence([1, 3, 2])) 
// true

console.log(almostIncreasingSequence([3, 3, 2, 1])) 
// false

console.log(almostIncreasingSequence([2, 6, 100, 1])) 
// true