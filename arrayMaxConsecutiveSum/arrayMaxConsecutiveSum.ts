const arrayMaxConsecutiveSum = (inputArray: number[], k: number): number => {
  let obj: {index: number, sum: number} = {
    index: 0,
    sum: 0
  }

  let i: number = 0
  while (i < inputArray.length) {
    const sum: number = inputArray.slice(i, i+k).reduce((acc, val) => {
      return acc + val
    }, 0)

    obj = {
      index: sum > obj.sum ? i : obj.index,
      sum: sum > obj.sum ? sum : obj.sum
    }

    i++
  }

  return obj.sum
}

// 8
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

// 3
console.log(arrayMaxConsecutiveSum([1, 1, 1, 1, 1], 3));
