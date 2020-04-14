function absoluteValuesSumMinimization(a: number[]): number {
//  return a.length % 2 === 0 
//    ? a[a.length / 2 - 1]
//    : a[Math.floor(a.length / 2)]
    
    const arrayLength: number = a.length
    const midPoint: number = Math.floor(arrayLength / 2)

    return arrayLength % 2 === 0 
      ? a[midPoint - 1] 
      : a[midPoint]
}


console.log(absoluteValuesSumMinimization([2, 4, 7])); // 4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6])); // 4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6])); // 7
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])); // 7