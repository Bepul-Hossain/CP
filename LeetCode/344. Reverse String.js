var reverseString = function (s) {
    const length = s.length;
    const mid = length >> 1;
    let j = length - 1
    for (let i = 0; i < mid; i++) {
        let left = s[i], right = s[j];
        s[i] = right;
        s[j] = left;
        j--;
    }
    return s;
};
console.log(reverseString(["h", "e", "l", "l", "l", "o"]));