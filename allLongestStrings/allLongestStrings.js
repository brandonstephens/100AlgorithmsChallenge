var allLongestStrings = function (inputArray) {
    var longest = inputArray.map(function (x) { return x.length; }).sort(function (a, b) { return b - a; })[0];
    return inputArray.reduce(function (acc, val) {
        if (val.length === longest) {
            acc.push(val);
        }
        return acc;
    }, []);
};
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "adddddd", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aaaa", "ddddx", "vcd", "aba"]));
console.log(allLongestStrings(["a"]));
