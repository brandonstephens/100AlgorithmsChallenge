function add(param1: number, param2: number): number {
  return param1 + param2
}

 function add2(...values: number[]): number {
  return values.reduce((acc: number, val: number) => acc + val, 0)
 }

console.log(add(1, 2)); // 3
console.log(add(3, 2)); // 5

console.log(add2(1,2,3,4,5)); // 15
console.log(add2(2,3)); // 5
console.log(add2(1)); // 1