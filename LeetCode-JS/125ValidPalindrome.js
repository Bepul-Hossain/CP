function isNumberOrChar(c) {
    if (c >= '0' && c <= '9') {
        return c;
    }
    else if (c >= 'a' && c <= 'z') {
        return c;
    }
    else if (c >= 'A' && c <= 'Z') {
        return c.toLowerCase();
    }
    else return false
}

var isPalindrome = function (s) {
    let i = 0;
    let len = s.length;
    let arr = [];
    while (i < len) {
        // if (isNumberOrChar(s[i]))
        let j = isNumberOrChar(s[i]);
        if (j) {
            arr.push(j)
        }
        i++;
    }
    let arrSize = arr.length;
    for (let i = 0; i < (arrSize >> 1); i++) {
        if (arr[i] !== arr[arrSize - (i + 1)]) {
            return false
        }
    }
    return true;
};

const s = "race a car";
var p = isPalindrome(s)

console.log(p);
