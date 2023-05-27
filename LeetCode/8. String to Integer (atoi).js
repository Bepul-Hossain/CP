var myAtoi = function (s) {
    s = s.trim();
    if (s.length === 0) return 0;

    let sign;
    let i;
    if (s[0] === '-') {
        sign = -1;
        i = 1;
    } else if (s[0] === "+") {
        sign = 1;
        i = 1;
    } else {
        sign = 1;
        i = 0;
    }
    let start = i;
    function solution(symbol) {
        return /^[0-9]$/.test(symbol);
    }
    while (i < s.length && solution(s[i])) {
        i++;
    }

    let num = Number(s.slice(start, i));
    let res = num * sign;

    if (res < -1 * (2 ** 31)) return -1 * (2 ** 31);
    else if (res > (2 ** 31) - 1) return (2 ** 31) - 1;
    return num * sign;
};

console.log(myAtoi("   +0 123"));