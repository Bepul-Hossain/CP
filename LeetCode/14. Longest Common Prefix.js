var longestCommonPrefix = function (strs) {
    let minLength;
    if (strs.length > 0) {
        minLength = strs[0].length;
    } else {
        minLength = 0;
    }
    for (let i = 1; i < strs.length; i++) {
        let subString = strs[i];
        if (subString.length < minLength) {
            minLength = subString.length;
        }
    }
    if (minLength === 0) return "";
    let res = ""
    for (let i = 0; i < minLength; i++) {
        let tmp = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (tmp !== strs[j][i]) {
                return res;
            }
        }
        res = res.concat(tmp)
    }
    return res;
};
console.log(longestCommonPrefix(["flower", "flow", "flight", "a"]));