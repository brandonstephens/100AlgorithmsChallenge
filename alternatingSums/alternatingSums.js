var alternatingSums = function (a) {
    return a.reduce(function (acc, val, index) {
        if (index % 2 === 0) {
            acc[0] += val;
        }
        else {
            acc[1] += val;
        }
        return acc;
    }, [0, 0]);
};
// [180, 105]
console.log(alternatingSums([50, 60, 60, 45, 70]));
