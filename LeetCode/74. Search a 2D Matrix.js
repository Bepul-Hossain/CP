/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
    let len = Math.floor(matrix.length / 2);
    if (matrix.length === 1) return matrix[0].includes(target);

    if (matrix[len][0] > target) {
        return searchMatrix(matrix.slice(0, len), target);
    } else if (matrix[len][0] < target) {
        return searchMatrix(matrix.slice(len), target);
    }
    return true;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 60));

