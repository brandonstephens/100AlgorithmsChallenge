const allLongestStrings = (inputArray) => {
  const longest = inputArray.map(x => x.length).sort((a,b) => b - a)[0]

  return inputArray.reduce((acc,val) => {
    if (val.length === longest) {
      acc.push(val)
    }
    return acc
  },[])
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));