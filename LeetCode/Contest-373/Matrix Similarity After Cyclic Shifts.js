var areSimilar = function (mat, k) {
    let r = mat.length;
    let c = mat[0].length;
    k = k % c;

    for (let j = 0; j < r; j++) {
        let tmpArr = [];
        for (let i = k; i < c; i++) {
            tmpArr.push(mat[j][i]);
        }
        for (let i = 0; i < k; i++) {
            tmpArr.push(mat[j][i]);
        }
        for (let p = 0; p < mat[j].length; p++) {
            if (mat[j][p] !== tmpArr[p]) return false;
        }
    }
    return true;
};

console.log(areSimilar([[1, 2, 1, 2], [5, 5, 5, 5], [6, 3, 6, 3]], 1));