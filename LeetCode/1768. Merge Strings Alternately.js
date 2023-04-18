/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2, merge = "") {
    let l1 = word1.length;
    let l2 = word2.length;
    let minLength = l1 < l2 ? l1 : l2;
    let i = 0
    for (; i < minLength; i++) {
        merge = merge + word1[i] + word2[i];
    }
    if (l1 < l2) {
        merge = merge + word2.slice(i);
    } else {
        merge = merge + word1.slice(i);
    }
    return merge;
};

console.log(mergeAlternately("abc", "pqr"));