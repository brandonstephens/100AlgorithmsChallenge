const arrayReplace = (inputArray: number[], elemToReplace: number, substitutionElem: number): number[] => {
  return inputArray.reduce((acc, val) => {
    return (val === elemToReplace) 
      ? [...acc, substitutionElem]
      : [...acc, val]
  }, [])
}

// [3,2,3]
console.log(arrayReplace([1, 2, 1], 1, 3));

// [ 1, 0, 1, 1, 0, 1 ]
console.log(arrayReplace([1, 2, 1, 1, 2, 1], 2, 0));

// [1,2,1]
console.log(arrayReplace([1, 2, 1], 3, 3));
