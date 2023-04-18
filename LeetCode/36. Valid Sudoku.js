/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isSubBoard = (board, p, q) => {

    let hash = {};
    for (let i = p; i < p + 3; i++) {
        for (let j = q; j < q + 3; j++) {
            const item = board[i][j]
            if (item !== '.') {
                if (hash[item] === item) return false
                hash[item] = item;
            }
        }
    }
}

var isValidSudoku = function (board) {
    for (let p = 0; p < 9; p = p + 3) {
        for (let q = 0; q < 9; q = q + 3) {
            if (isSubBoard(board, p, q) === false) return false;
        }
    }
    for (let p = 0; p < 9; p++) {
        let hash = {};
        for (let q = 0; q < 9; q++) {
            const item = board[p][q];
            if (item !== '.') {
                if (hash[item] === item) return false;
                hash[item] = item
            }
        }
    }
    for (let p = 0; p < 9; p++) {
        let hash = {};
        for (let q = 0; q < 9; q++) {
            const item = board[q][p];
            if (item !== '.') {
                if (hash[item] === item) return false;
                hash[item] = item
            }
        }
    }
    return true;
};
console.log(isValidSudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));