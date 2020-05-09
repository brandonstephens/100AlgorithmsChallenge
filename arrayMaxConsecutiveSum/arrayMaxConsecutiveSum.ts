const arrayMaxConsecutiveSum = (inputArray: number[], k: number): number => {
  let sum: number = 0
  let i: number = 0

  while (i < inputArray.length) {
    const newSum: number = inputArray.slice(i, i + k).reduce((acc, val) => {
      return acc + val
    }, 0)

    sum = newSum > sum ? newSum : sum
    i++
  }

  return sum
}

// 8
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

// 3
console.log(arrayMaxConsecutiveSum([1, 1, 1, 1, 1], 3));
