const allLongestStrings = (inputArray: string[]): string[] => {
  const longestLength: number = inputArray
    .reduce((acc: number, val: string) => {
      acc = val.length > acc ? val.length : acc
      return acc
    }, 0)

  return inputArray.reduce((acc: string[], val: string) => {
    if (val.length === longestLength) {
      acc.push(val)
    }
    return acc
  },[])
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
//[ 'aba', 'vcd', 'aba' ]
console.log(allLongestStrings(["aba", "aa", "adddddd", "vcd", "aba"]));
//[ 'adddddd' ]
console.log(allLongestStrings(["aba", "aaaa", "ddddx", "vcd", "aba"]));
//[ 'ddddx' ]
console.log(allLongestStrings(["a"]));
//[ 'a' ]