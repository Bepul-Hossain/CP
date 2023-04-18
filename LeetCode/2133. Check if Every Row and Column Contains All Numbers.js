/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        const set = new Set();
        for (let j = 0; j < n; j++) {
            set.add(matrix[i][j])
        }
        if (set.size !== n) return false;

        const set2 = new Set();
        for (let j = 0; j < n; j++) {
            set2.add(matrix[j][i])
        }
        if (set2.size !== n) return false;
    }
    return true;
};
console.log(checkValid([[1, 2, 3], [3, 1, 2], [2, 3, 1]]));