const alphabeticShift = (inputString: string): string => {
  return inputString.split('').map((x,i) => {
    if(x.charCodeAt(0) === 122) {
      return String.fromCharCode(97)
      } 
    return String.fromCharCode(x.charCodeAt(0)+1)
  }).join('')
}

// dsbaz
console.log(alphabeticShift('crazy'));
