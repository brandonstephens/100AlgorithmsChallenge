const areSimilar = (a: number[], b: number[]): boolean => {
  // let a2: number[] = []
  // let b2: number[] = []

  // if (a.toString() === b.toString()) {
  //   return true
  // }

  // for (let i = 0; i < a.length; i++) {
  //   if(a[i] !== b[i]) {
  //     a2.push(a[i])
  //     b2.push(b[i])
  //   }
  // }

  // b2 = b2.reverse();

  // if(a2.length === 2 && (a2.toString() === b2.toString())) {
  //   return true
  // }

  // return false

  let diff = 0

  a.forEach((val, i) => {
    if (val != b[i]) diff++
  })

  return diff > 2 ? false : true
}


// true
console.log(areSimilar([1, 2, 3], [1, 2, 3]));

// true
console.log(areSimilar([1, 2, 3], [2, 1, 3]));

// false
console.log(areSimilar([1, 2, 2], [2, 1, 1]));

// true
console.log(areSimilar([1, 2, 3, 4, 5], [1, 2, 4, 3, 5]));

//true
console.log(areSimilar([1, 2, 3, 4, 5], [1, 2, 5, 4, 3]));

//false
console.log(areSimilar([1, 2, 3, 4, 5], [1, 2, 5, 3, 4]));
