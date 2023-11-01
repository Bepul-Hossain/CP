const neibour8 = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];

function isSafe(row, col, i, j, grid, visited) {
    if (i >= 0 && i < row && j >= 0 && j < col && grid[i][j] === '1' && !visited[i][j]) {
        return true;
    }
    return false;
}

function dfs(grid, row, col, i, j, visited) {

    if (visited[i][j]) return;
    visited[i][j] = true;

    for (let k = 0; k < 8; k++) {

        let newI = i + neibour8[k][0];
        let newJ = j + neibour8[k][1];

        if (isSafe(row, col, newI, newJ, grid, visited)) {
            dfs(grid, row, col, newI, newJ, visited);
        }
    }
}


function countIslands(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let visited = [];

    for (let i = 0; i < row; i++) {
        visited[i] = [];
        for (let j = 0; j < col; j++) {
            visited[i].push(false)
        }
    }

    // console.log(visited);
    let count = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                // console.log(i, j);
                dfs(grid, row, col, i, j, visited);
                count++;
            }
        }
    }
    return count;
}

// Driver method
let grid = [
    ['1', '1', '0', '0', '0'],
    ['0', '1', '0', '0', '1'],
    ['1', '0', '0', '1', '1'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['1', '0', '1', '0', '1']
];

console.log("Number of islands is: " + countIslands(grid));