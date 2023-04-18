var spiralOrder = function (matrix) {
    let res = [];
    let row = matrix.length;
    let col = matrix[0].length;
    let [left, right, top, bottom] = [0, col - 1, 0, row - 1];
    let count = 0;

    while (count < row * col) {

        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
            count = count + 1;
        };
        top++;
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
            count = count + 1;
        };
        right--;
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
            count = count + 1;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
            count = count + 1;
        }
        left++;
    }
    let ans = [];
    for (let i = 0; i < row * col; i++) {
        ans.push(res[i]);
    }
    return ans;
};
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));