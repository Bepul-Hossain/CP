"use strict";
exports.__esModule = true;
function getLength(obj) {
    return obj.length;
}
var p = getLength(['3', '5']);
var q = getLength('hello');
console.log(p);
console.log(q);
function wrapInArray(obj) {
    if (typeof obj === "string") {
        console.log('hello');
        return [obj];
    }
    else {
        return obj;
    }
}
console.log(wrapInArray(['3', '7']));
//console.log(wrapInArray('this is string'));
