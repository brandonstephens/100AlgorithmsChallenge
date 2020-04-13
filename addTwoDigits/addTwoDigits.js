function addTwoDigits(n) {
    return n
        .toString()
        .split('')
        .reduce(function (acc, val) {
        return acc + parseInt(val);
    }, 0);
}
console.log(addTwoDigits(29)); //11
console.log(addTwoDigits(291)); //12
console.log(addTwoDigits(999)); //27
