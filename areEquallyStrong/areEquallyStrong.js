var areEquallyStrong = function (yourLeft, yourRight, friendsLeft, friendsRight) {
    if (yourLeft + yourRight !== friendsLeft + friendsRight) {
        return false;
    }
    var yourStrongest = yourRight >= yourLeft ? yourRight : yourLeft;
    var friendsStrongest = friendsRight >= friendsLeft ? friendsRight : friendsLeft;
    if (yourStrongest !== friendsStrongest) {
        return false;
    }
    return true;
};
// true
console.log(areEquallyStrong(10, 15, 15, 10));
// true
console.log(areEquallyStrong(15, 10, 15, 10));
//false
console.log(areEquallyStrong(15, 10, 15, 9));
//false
console.log(areEquallyStrong(15, 10, 14, 11));
