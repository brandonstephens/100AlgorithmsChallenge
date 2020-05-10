const arrayPreviousLess = (items: number[]): number[] => {
  return items.map((val, index) => {
    return items.slice(0, index).reduce((acc, elm) => {
      return elm < val
        ? elm
        : acc < elm
          ? acc
          : -1
    }, -1)
  })
}

// [-1, 3, -1, 2, 4]
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
