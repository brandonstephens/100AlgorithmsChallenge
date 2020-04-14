var allLongestStrings = function (inputArray) {
    var longestLength = inputArray
        .reduce(function (acc, val) {
        acc = val.length > acc ? val.length : acc;
        return acc;
    }, 0);
    return inputArray.reduce(function (acc, val) {
        if (val.length === longestLength) {
            acc.push(val);
        }
        return acc;
    }, []);
};
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
//[ 'aba', 'vcd', 'aba' ]
console.log(allLongestStrings(["aba", "aa", "adddddd", "vcd", "aba"]));
//[ 'adddddd' ]
console.log(allLongestStrings(["aba", "aaaa", "ddddx", "vcd", "aba"]));
//[ 'ddddx' ]
console.log(allLongestStrings(["a"]));
//[ 'a' ]
