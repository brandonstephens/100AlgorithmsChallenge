const arrayConversion = (inputArray: number[], pass: number = 1): number => {
  if (inputArray.length === 1) {
    return inputArray[0]
  }

  const outputArray = inputArray.reduce((acc, val, index) => {
    if (index === 0 || index % 2 == 0) {
      acc = (pass % 2) !== 0
        ? [...acc, val + (inputArray[index + 1] || 0)]
        : [...acc, val * (inputArray[index + 1] || 1)]
    }
    return acc
  }, [])

  return arrayConversion(outputArray, pass + 1)
}

// 186
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

// 16
console.log(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

// 4
console.log(arrayConversion([1, 1, 2]));
