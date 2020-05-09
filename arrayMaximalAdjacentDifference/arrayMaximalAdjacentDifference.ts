const arrayMaximalAdjacentDifference = (inputArray: number[]): number => {
  let diff: number = 0
  let i: number = 0

  while (i < inputArray.length) {
    const newDiff: number = Math.abs(inputArray[i] - inputArray[i + 1])
    diff = newDiff > diff ? newDiff : diff
    i++
  }

  return diff
}

// 3
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

// 5
console.log(arrayMaximalAdjacentDifference([2, 3, 5, 1, 6]));

// 0
console.log(arrayMaximalAdjacentDifference([1, 1, 1, 1, 1]));
