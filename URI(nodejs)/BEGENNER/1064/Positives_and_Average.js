const input = require("fs").readFileSync("../dev/file.txt", "utf8");
var lines = input.split("\n");
var sum = 0;
var count = 0;
lines.forEach(function (value, index, arr) {
  arr[index] = parseFloat(value);
  if (arr[index] > 0) {
    sum += arr[index];
    count++;
  }
});

console.log(count + " valores positivos\n" + (sum / count).toFixed(1));
