/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let n = s.length;

    if (numRows <= 1) return s;
    let res = "";
    let inc = 2 * numRows - 2;

    for (let row = 0; row < numRows; row++) {
        for (let i = 0; row + i < n; i = i + inc) {
            res = res + s[row + i];
            if (row !== 0 && row !== numRows - 1 && i + inc - row < n) {
                res = res + s[i + inc - row];
            }
        }
    }
    return res;

};

console.log(convert("PAYPALISHIRING", 4));