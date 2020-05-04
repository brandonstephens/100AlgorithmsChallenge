var alphabetSubsequence = function (str) {
    //  const arr = str.split('')
    //  
    //  return arr.reduce((acc: boolean, val: string, index: number) => {
    //    if(index > 0 && acc) {
    //     acc = arr[index-1].charCodeAt(0) < val.charCodeAt(0)
    //    }
    //    return acc
    //  }, true)
    var arr = str.split('');
    var output = true;
    for (var i = 0; i < arr.length; i++) {
        if (!output) {
            break;
        }
        if (i > 0) {
            output = arr[i - 1] < arr[i];
        }
    }
    return output;
};
console.log(alphabetSubsequence('zabsdfghjkljhgfdsghjklhg')); // false
console.log(alphabetSubsequence('effg')); // false
console.log(alphabetSubsequence('cdce')); // false
console.log(alphabetSubsequence('ace')); // true
console.log(alphabetSubsequence('bxz')); // true
console.log(alphabetSubsequence('zyxwasdfasdfasfasfasdfasdf')); // false
