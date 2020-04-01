var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

const a = parseInt(Number(lines[0]));
const b = parseInt(Number(lines[1]));
if (a === 1) {
  console.log("Total: R$ " + (4.0 * b).toFixed(2));
} else if (a === 2) {
  console.log("Total: R$ " + (4.5 * b).toFixed(2));
} else if (a === 3) {
  console.log("Total: R$ " + (5.0 * b).toFixed(2));
} else if (a === 4) {
  console.log("Total: R$ " + (2.0 * b).toFixed(2));
} else if (a === 5) {
  console.log("Total: R$ " + (1.5 * b).toFixed(2));
}