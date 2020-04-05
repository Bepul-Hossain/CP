var input = require("fs").readFileSync("../dev/file.txt", "utf8");
var lines = input.split("\n");

var salary = parseFloat(lines[0]);
var tax = 0.0;
var i1,
  i2,
  i3 = 0.0;

if (0 <= salary && salary <= 2000) {
  console.log("Isento");
} 

else if (2000.01 <= salary && salary <= 3000) {
  tax = (salary - 2000) * 0.08;
  console.log("R$ " + tax.toFixed(2));
} 

else if (3000.01 <= salary && salary <= 4500) {
  i1 = 1000 * 0.08;
  i2 = (salary - 3000) * 0.18;
  tax = i1 + i2;
  console.log("R$ " + tax.toFixed(2));
} 

else if (4500 < salary) {
  i1 = 1000 * 0.08;
  i2 = 1500 * 0.18;
  i3 = (salary - 4500) * 0.28;
  tax = i1 + i2 + i3;
  console.log("R$ " + tax.toFixed(2));
}