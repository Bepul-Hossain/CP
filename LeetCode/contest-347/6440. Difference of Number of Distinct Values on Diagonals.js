/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function (grid) {

    let r = grid.length;
    let c = grid[0].length;

    let res = [];
    for (let i = 0; i < r; i++) {
        let subArr = [];
        for (let j = 0; j < c; j++) {
            let topLeftSet = new Set();
            let bottomRightSet = new Set();
            //i ba j zero hoy no topLeft
            let row = i;
            let col = j;
            while (row > 0 && col > 0) {
                row--;
                col--;
                topLeftSet.add(grid[row][col])
            }
            //i ba j c-1/r-1 no bottomRight
            row = i + 1;
            col = j + 1;
            while (row < r && col < c) {
                bottomRightSet.add(grid[row][col])
                row++;
                col++;
            }

            let s = Math.abs(topLeftSet.size - bottomRightSet.size);
            subArr.push(s);
        }
        res.push(subArr);
    }
    return res;
};

console.log(differenceOfDistinctValues([[1, 2, 3], [3, 1, 5], [3, 2, 1]]
));