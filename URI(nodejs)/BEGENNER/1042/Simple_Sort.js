var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");
var arr = [];
for (let i = 0; i < lines.length; i++) {
  arr[i] = parseInt(lines[i]);
}
var old = arr.slice();
function sortNumber(a, b) {
  return a - b;
}
arr.sort(sortNumber);

for (let i = 0; i < lines.length; i++) {
  console.log(arr[i]);
}
console.log();

for (let i = 0; i < lines.length; i++) {
  console.log(old[i]);
}