const areEquallyStrong = (yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean => {  
  if(yourLeft + yourRight !== friendsLeft + friendsRight) {
    return false
  }
  
  const yourStrongest = yourRight >= yourLeft ? yourRight : yourLeft
  const friendsStrongest = friendsRight >= friendsLeft ? friendsRight : friendsLeft
  if(yourStrongest !== friendsStrongest) {
    return false
  }
  
  return true
}

// true
 console.log(areEquallyStrong(10, 15, 15, 10))

// true
 console.log(areEquallyStrong(15, 10, 15, 10))

//false
 console.log(areEquallyStrong(15, 10, 15, 9))

//false
 console.log(areEquallyStrong(15, 10, 14, 11))
