const checkPalindrome = (subString) => {
    let length = subString.length;
    let mid = (length >> 1);
    for (let i = 0; i < mid; i++) {
        if (subString[i] !== subString[length - i - 1]) return false;
    }
    return true;
}
var validPalindrome = function (s) {
    let length = s.length;
    let mid = (length >> 1)
    for (let i = 0; i < mid; i++) {
        if (s[i] !== s[length - i - 1]) {
            const check1 = checkPalindrome(s.slice(i + 1, length - i));
            if (check1 === true) return true;
            const check2 = checkPalindrome(s.slice(i, length - i - 1));
            if (check2 === true) return true;
            return false;
        }
    }
    return true;
};

console.log(validPalindrome("abcccbaa"));