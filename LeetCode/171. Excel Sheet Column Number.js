/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let val = 0, pos = 0;
    const base = 26;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let char = columnTitle[i];
        let baseExPos = base ** pos;
        val += baseExPos * (char.charCodeAt(0) - 64);
        pos++;
    }
    return val;
};

console.log(titleToNumber("A"));