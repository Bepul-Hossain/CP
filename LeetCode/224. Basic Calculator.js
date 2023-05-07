/**
 * @param {string} s
 * @return {number}
 */

var calculate = function (s) {
    let num = 0;
    let sign = 1;
    let res = 0;
    let stack = [];
    for (let c of s) {
        if (c.match(/[0-9]/)) {
            num = (num * 10) + parseInt(c);
        } else if (c === '-' || c === '+') {

            res = res + (sign * num);
            if (c === '-') sign = -1;
            else {
                sign = 1
            }
            num = 0;
        } else if (c === '(') {
            stack.push(res);
            stack.push(sign);

            num = 0;
            sign = 1;
            res = 0;
        } else if (c === ')') {

            res = res + (sign * num);
            res = res * stack.pop(); //  res*sign
            res = res + stack.pop();
            num = 0;
        }
    }

    return res = res + (sign * num);
};

//20-6+(2-3)

console.log(calculate("2147483647"));