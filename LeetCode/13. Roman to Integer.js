var romanToInt = function (s) {
    const hash = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let res = 0;
    for (let i = 0; i < s.length;) {
        if ((i + 1) === s.length) {
            res = res + hash[s[i]];
            i++;
        }
        else if (hash[s[i]] < hash[s[i + 1]]) {
            res = res + (hash[s[i + 1]] - hash[s[i]]);
            i = i + 2;
        } else {
            res = res + hash[s[i]];
            i++;
        }
    }
    return res;
};
console.log(romanToInt("LVIII"));