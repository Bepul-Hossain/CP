var islandPerimeter = function (grid) {
    let perimeter = 0;
    let gridLength = grid.length
    for (let i = 0; i < gridLength; i++) {
        let rowLength = grid[i].length;
        for (let j = 0; j < rowLength; j++) {
            if (grid[i][j] === 1) {
                if (j - 1 < 0) {
                    perimeter++;
                } else if (grid[i][j - 1] === 0) {
                    perimeter++;
                }
                if (j + 1 >= rowLength) {
                    perimeter++;
                } else if (grid[i][j + 1] === 0) {
                    perimeter++;
                }
                if (i - 1 < 0) {
                    perimeter++;
                } else if (grid[i - 1][j] === 0) {
                    perimeter++;
                }
                if (i + 1 >= gridLength) {
                    perimeter++;
                }
                else if (grid[i + 1][j] === 0) {
                    perimeter++;
                }
            }
        }
    }
    return perimeter
};
console.log(islandPerimeter([[0, 1, 0], [0, 0, 1], [0, 0, 1]]));