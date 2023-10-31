function decodeString(s) {
    var stack = [];
    var curStr = "";
    var curMul = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char === '[') {
            stack.push([curMul, curStr]);
            curStr = "";
            curMul = 0;
        }
        else if (char === ']') {
            var _a = stack.pop(), prevMul = _a[0], prevStr = _a[1]; //non-null assertion operator (!) to assert that the stack is not empty
            curStr = prevStr + curStr.repeat(prevMul);
        }
        else if (!isNaN(Number(char))) {
            curMul = curMul * 10 + Number(char);
        }
        else {
            curStr = curStr + char;
        }
    }
    return curStr;
}
;
console.log(decodeString("2[abc]3[cd]ef"));
