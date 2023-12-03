/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const arr = s.trim().split(" ");
    let n = arr.length;

    let res = "";
    let word = arr[n - 1];
    if (word.length > 0) {
        res = word;
    }
    n = n - 1;
    while (n) {
        word = arr[n - 1];
        if (word.length > 0) {
            res = res + " " + word;
        }
        n--;
    }
    return res;
};

console.log(reverseWords("  hello world  "));