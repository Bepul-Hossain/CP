const s = "pizza";
const arr = ["pizza", "pizza", "pasta", "burger"];

function foodCount(s, arr) {
    const len = arr.le;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (arr[i] === s) {
            count++;
        }
    }
    return count;
}

var z = foodCount(s, arr);
console.log(z);