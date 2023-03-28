const input = require("fs").readFileSync("../dev/file.txt", "utf8");

const lines = input.split("\n");
var arr = [];
for (let i = 0; i < 100; i++) {
  arr[i] = parseInt(lines[i]);
}
var bigNumber = Math.max.apply(null, arr);
console.log(bigNumber);
console.log(arr.indexOf(bigNumber) + 1);
