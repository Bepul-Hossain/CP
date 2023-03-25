const digits = [9]
var plusOne = function (digits) {
    const length = digits.length;
    for (let i = length - 1; i >= 0; i--) {
        let p = digits[i] + 1;
        if (p > 9) {
            digits[i] = p - 10;
        }
        else {
            digits[i] = p;
            break;
        }
    }
    if (digits[0] === 0) {
        digits = [...[1], ...digits]
    }
    return digits;
};
console.log(plusOne(digits));