/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
    let row = matrix.length;
    let column = matrix[0].length;

    let firstColumn = [];
    for (let i = 0; i < row; i++) {
        firstColumn.push(matrix[i][0]);
    }

    const rec = (start, end) => {
        if (start >= end) {
            return start;
        }
        const mid = Math.floor((end - start) / 2) + start;
        if (matrix[mid][0] === target) {
            return true;
        }
        if (matrix[mid][0] > target) {
            return rec(start, mid - 1);
        }
        if (matrix[mid][0] < target) {
            return rec(mid + 1, end);
        }
    }
    let findRow = rec(0, row - 1);
    if (matrix[row][0] > target) {
        row--;
    }
    return row;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60], [65, 70, 75, 80]], 1));

