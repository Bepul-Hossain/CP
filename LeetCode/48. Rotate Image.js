var rotate = function (matrix) {
    let n = matrix.length - 1;

    //diagonal reverse
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    //row reverse
    for (let i = 0; i <= n; i++) {
        matrix[i].reverse();
    }
    console.log(matrix);
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));