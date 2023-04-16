var rowAndMaximumOnes = function (mat) {
    let row = 0;
    let ones = 0;

    for (let i = 0; i < mat.length; i++) {
        let subArr = mat[i];
        let subArrLength = mat[i].length
        let count = 0;
        for (let j = 0; j < subArrLength; j++) {
            if (subArr[j] === 1) {
                count++;
            }
        }
        if (count > ones) {
            ones = count;
            row = i;
        }
    }

    return [row, ones]
};
console.log(rowAndMaximumOnes([[0, 0], [1, 1], [0, 0]]));