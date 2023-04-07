const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = 3;
const cols = 3;

const twoDArray = arr.reduce((result, value, index) => {
    const row = Math.floor(index / cols);
    if (!result[row]) {
        result[row] = [];
    }
    result[row].push(value);
    return result;
}, []);

console.log(twoDArray);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]