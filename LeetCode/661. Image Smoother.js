var imageSmoother = function (img) {
    let colLen = img.length;
    let newImg = [];
    for (let i = 0; i < colLen; i++) {
        let rowLen = img[0].length;
        let row = [];
        for (let j = 0; j < rowLen; j++) {
            let sum = img[i][j];
            let val = 1;
            if (i - 1 > -1 && j - 1 > -1) {
                sum = sum + img[i - 1][j - 1]
                val++;
            }
            if (i - 1 > -1) {
                sum = sum + img[i - 1][j]
                val++;
            }
            if (i - 1 > -1 && j + 1 < rowLen) {
                sum = sum + img[i - 1][j + 1];
                val++;
            }

            if (j - 1 > -1) {
                sum = sum + img[i][j - 1];
                val++;
            }
            if (j + 1 < rowLen) {
                sum = sum + img[i][j + 1]
                val++;
            }
            if (i + 1 < colLen && j - 1 > -1) {
                sum = sum + img[i + 1][j - 1];
                val++;
            }
            if (i + 1 < colLen) {
                sum = sum + img[i + 1][j];
                val++;
            }
            if (i + 1 < colLen && j + 1 < rowLen) {
                sum = sum + img[i + 1][j + 1]
                val++;
            }
            row.push(Math.floor(sum / val));
        }
        newImg.push(row)
    }
    return newImg;
};
console.log(imageSmoother([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));