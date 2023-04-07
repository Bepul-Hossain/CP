var isSubsequence = function (s, t) {
    let length_t = t.length;
    let j = 0;
    for (let i = 0; i < length_t; i++) {
        if (s[j] === t[i]) {
            j++;
        }
    }
    return j === s.length;

};
console.log(isSubsequence("abc", "ahbgdc"));