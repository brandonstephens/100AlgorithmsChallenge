function adjacentElementsProduct(inputArray) {
    return inputArray.reduce(function (acc, val, index) {
        if (inputArray[index] * inputArray[index + 1] > acc) {
            acc = inputArray[index] * inputArray[index + 1];
        }
        return acc;
    }, 0);
}
console.log(adjacentElementsProduct([3, 2])); // 21
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([5, 21, -2, -5, 7, 3])); // 105
