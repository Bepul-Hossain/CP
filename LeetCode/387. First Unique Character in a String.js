/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map();
    let map2 = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map2.delete(s[i], s[i]);
        } else {
            map.set(s[i], s[i]);
            map2.set(s[i], s[i]);
        }
    }
    if (map2.size <= 0) return -1;
    const firstElement = map2.entries().next().value;
    return s.indexOf(firstElement[0]);
};

console.log(firstUniqChar("loveleetcode"));