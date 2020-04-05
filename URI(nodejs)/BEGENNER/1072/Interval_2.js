const input = require("fs").readFileSync("../dev/file.txt", "utf8");
const lines = input.split("\n");

var n = parseInt(lines[0]);
var inside=0;
var out=0;
var p;
for (let i = 1; i <= n; i++) {
    p=parseInt(lines[i]);

  if (p >= 10 && p <= 20) {
    inside++;
  } else {
    out++;
  }
}
console.log(inside + " in");
console.log(out + " out");
