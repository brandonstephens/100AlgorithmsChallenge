var areSimilar = function (a, b) {
    var output = true;
    var i = 0;
    while (i < a.length - 1) {
        if (a[i] !== b[i]) {
            if (a[i] !== b[i + 1] && a[i + 1] !== b[i]) {
                output = false;
                break;
            }
            else {
                i += 2;
            }
        }
        i += 1;
    }
    return output;
};
// true
console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// true
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// false
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
// true
console.log(areSimilar([1, 2, 3, 4, 5], [1, 2, 4, 3, 5]));
//false
console.log(areSimilar([1, 2, 3, 4, 5], [1, 2, 5, 4, 3]));
