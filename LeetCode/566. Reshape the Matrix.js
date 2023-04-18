var matrixReshape = function (mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;
    if (m * n !== r * c) return mat;

    let p = 0, q = 0;
    let newMatrix = [];
    for (let i = 0; i < r; i++) {
        let row = []
        for (let j = 0; j < c; j++) {
            if (q >= n) {
                q = 0;
                p++;
            }
            row.push(mat[p][q])
            q++;
        }

        newMatrix.push(row)
    }
    return newMatrix;
};
console.log(matrixReshape([[1, 2, 3], [3, 4, 5]], 3, 2));