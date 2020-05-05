const areEquallyStrong = (yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean => {
  return yourLeft + yourRight === friendsLeft + friendsRight
}

// true
 console.log(areEquallyStrong(10, 15, 15, 10))

// true
 console.log(areEquallyStrong(15, 10, 15, 10))

//false
 console.log(areEquallyStrong(15, 10, 15, 9))
