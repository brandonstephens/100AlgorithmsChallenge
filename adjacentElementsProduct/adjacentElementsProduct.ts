function adjacentElementsProduct(inputArray: number[]): number {
  return inputArray.reduce((acc: number, val: number, index: number) => {
    if(inputArray[index] * inputArray[index + 1] > acc) {
      acc = inputArray[index] * inputArray[index + 1]
    }
    return acc
  }
  , 0)
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([5, 21, -2, -5, 7, 3])); // 105
console.log(adjacentElementsProduct([3, 2])); // 6