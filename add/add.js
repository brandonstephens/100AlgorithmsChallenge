function add(param1, param2) {
    return param1 + param2;
}
function add2() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values.reduce(function (acc, val) { return acc + val; }, 0);
}
console.log(add(1, 2)); // 3
console.log(add(3, 2)); // 5
console.log(add2(1, 2, 3, 4, 5)); // 15
console.log(add2(2, 3)); // 5
console.log(add2(1)); // 5
