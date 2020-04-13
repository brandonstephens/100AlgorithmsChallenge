function addTwoDigits(n: any): number {
  return n
    .toString()
    .split('')
    .reduce((acc: number, val: string) => 
      acc + parseInt(val)
    , 0)
}

console.log(addTwoDigits(29)); // 11
console.log(addTwoDigits(291)); // 12
console.log(addTwoDigits(999)); // 27