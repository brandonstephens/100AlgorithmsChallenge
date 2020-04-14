const allLongestStrings = (inputArray: string[]): string[] => {
  const longest: number = inputArray.map((x: string) => x.length).sort((a: number, b: number) => b - a)[0]
  return inputArray.reduce((acc: string[], val: string) => {
    if (val.length === longest) {
      acc.push(val)
    }
    return acc
  },[])
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "adddddd", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aaaa", "ddddx", "vcd", "aba"]));
console.log(allLongestStrings(["a"]));