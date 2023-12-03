/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */



var gameOfLife = function (board) {

    let m = board.length;
    let n = board[0].length;
    let board2 = [];
    for (let i = 0; i < m; i++) {
        board2[i] = [];
        for (let j = 0; j < n; j++) {
            board2[i][j] = 0;
        }
    }

    var aliveCell = function (board, i, j, m, n) {
        let num = 0;
        if (i - 1 >= 0 && i - 1 < m && j - 1 >= 0 && j < n && board[i - 1][j - 1] === 1) num++;
        if (i - 1 >= 0 && i - 1 < m && j >= 0 && j < n && board[i - 1][j] === 1) num++;
        if (i - 1 >= 0 && i - 1 < m && j + 1 >= 0 && j + 1 < n && board[i - 1][j + 1] === 1) num++;
        if (i >= 0 && i < m && j - 1 >= 0 && j - 1 < n && board[i][j - 1] === 1) num++;

        if (i >= 0 && i < m && j + 1 >= 0 && j + 1 < n && board[i][j + 1] === 1) num++;
        if (i + 1 >= 0 && i + 1 < m && j - 1 >= 0 && j - 1 < n && board[i + 1][j - 1] === 1) num++;
        if (i + 1 >= 0 && i + 1 < m && j >= 0 && j < n && board[i + 1][j] === 1) num++;
        if (i + 1 >= 0 && i + 1 < m && j + 1 >= 0 && j + 1 < n && board[i + 1][j + 1] === 1) num++;

        return num;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const nums = aliveCell(board, i, j, m, n);
            if (board[i][j] === 1) {
                if (nums < 2) {
                    board2[i][j] = 0;
                }
                else if (nums > 3) {
                    board2[i][j] = 0;
                }
                else {
                    board2[i][j] = 1;
                }
            } else {
                if (nums === 3) {
                    board2[i][j] = 1;
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = board2[i][j];
        }
    }
    return board;

};

console.log(gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]));