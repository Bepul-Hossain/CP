var input = require("fs").readFileSync("../dev/file.txt", "utf8");
var lines = input.split("\n");

var p,
  i = 0,
  x,
  y,
  res;

while (lines[i] != null) {
  p = lines[i].split(" ");
  x = BigInt(p[0]);
  y = BigInt(p[1]);
  res = (x ^ y).toString();
  console.log(res);
  i++;
}
