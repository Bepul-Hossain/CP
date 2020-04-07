const input = require("fs").readFileSync("dev/file.txt", "utf8");
const lines = input.split("\n");

var arr = [];
for (arr_i = 0; arr_i < 6; arr_i++) {
  arr[arr_i] = lines[arr_i].split(" ");
  arr[arr_i] = arr[arr_i].map(Number);
}

var highestSum = -63;
var tempSum = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    tempSum =
      arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] +
      arr[i + 1][j + 1] +
      arr[i + 2][j] +
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2];
    if (tempSum > highestSum) {
      highestSum = tempSum;
    }
  }
}
process.stdout.write(highestSum + "\n");
/*
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
*/
