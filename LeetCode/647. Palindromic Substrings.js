var palindrome = function (substring) {
    let len = substring.length
    let mid = len >> 1;
    for (let i = 0; i < mid; i++) {
        if (substring[i] !== substring[len - 1 - i]) {
            return false
        }
    }
    return true;
}

var countSubstrings = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            let substring = s.slice(i, j)
            let isPalindrome = palindrome(substring)
            if (isPalindrome) res += 1;
        }
    }
    return res;
};
console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));