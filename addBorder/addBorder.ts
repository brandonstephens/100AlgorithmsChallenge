const addBorder = (picture: string[]): string[] => {
  const border: {char: string, width:number} = {
    char: "*",
    width: 1
  }
  
  const rowWidth:number = picture[0].length + border.width * 2
  const colWidth: number = border.width
  
  const rowStr: string = Array(rowWidth + 1).join(border.char)
  const colStr: string = Array(colWidth + 1).join(border.char)
  const borderPicture = picture.map(x => `${colStr}${x}${colStr}`)
  
  return [rowStr, ...borderPicture, rowStr]
}

console.log(addBorder(["abc", "ded"]));  // ["*****", *abc*, *ded*, "*****"]
console.log(addBorder(["a", "b"]));  // ["***", *a*, *b*, "***"]