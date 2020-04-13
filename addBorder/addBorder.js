var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var addBorder = function (picture) {
    var border = {
        char: "*",
        width: 1
    };
    var rowWidth = picture[0].length + border.width * 2;
    var colWidth = border.width;
    var rowStr = Array(rowWidth + 1).join(border.char);
    var colStr = Array(colWidth + 1).join(border.char);
    var padPicture = picture.map(function (x) { return "" + colStr + x + colStr; });
    return __spreadArrays([rowStr], padPicture, [rowStr]);
};
console.log(addBorder(["abc", "ded"])); // ["*****", *abc*, *ded*, "*****"]
console.log(addBorder(["a", "b"])); // ["***", *a*, *b*, "***"]
