const input = require("fs").readFileSync("../dev/file.txt", "utf8");
const lines = input.split("\n");
const n = parseInt(lines[0]);
var arr = lines[1].split(" ");
arr.reverse();

for (let i = 0; i < n; i++) {
  process.stdout.write(arr[i] + " ");
}
process.stdout.write("\n");
