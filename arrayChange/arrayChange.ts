const arrayChange = (inputArray: number[]): number => {
  return inputArray.reduce((acc, val, index) => {
    if(index > 0) {
      acc = {
        prevValue: Math.abs(acc.prevValue) + 1,
        count: acc.count + Math.abs(acc.prevValue - val) + 1
      }
    }
    return acc
  }, {prevValue: inputArray[0], count: 0}).count
}

// 3
console.log(arrayChange([1, 1, 1]));

// 6
console.log(arrayChange([4, 2, 3]));

// 10
console.log(arrayChange([1, 1, 1, 1, 1]));

//4
console.log(arrayChange([3, 1, 4,]));



