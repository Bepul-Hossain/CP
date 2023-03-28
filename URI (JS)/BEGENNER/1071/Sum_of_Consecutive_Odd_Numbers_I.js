var input = require("fs").readFileSync("/dev/file.txt", "utf8");
var lines = input.split("\n");

var x = parseInt(lines[0]);
var y = parseInt(lines[1]);

if (x == y) {
  console.log("0");
} else {
  if (x > y) {
    var big = x;
    var small = y;
  } else if (y > x) {
    var big = y;
    var small = x;
  }
  var sum = 0;
  small++;
  while (small < big) {
    if (small % 2 != 0) {
      sum += small;
    }
    small++;
  }
  console.log(sum);
}