function addTwoDigits(number: number): number {
  return number
    .toString()
    .split('')
    .reduce((acc: number, val: string) => 
      acc + parseInt(val)
    , 0)
}

console.log(addTwoDigits(29)); // 11
console.log(addTwoDigits(291)); // 12
console.log(addTwoDigits(999)); // 27