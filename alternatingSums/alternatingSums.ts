const alternatingSums = (a: number[]): number[] => {
  return a.reduce((acc, val, index) => {
    if(index % 2 !== 0) {
      acc[1] += val
    } else {
      acc[0] += val
    }
    return acc
  }, [0,0])
}

// [180, 105]
console.log(alternatingSums([50, 60, 60, 45, 70]))