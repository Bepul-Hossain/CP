const input = require("fs").readFileSync("../dev/file.txt", "utf8");
const lines = input.split("\n");
var count = 0;
lines.forEach(function (value,index,arr) {
    arr[index]=parseInt(value)
  if (arr[index]%2===0) {
    count++;
  }
});
console.log(count + " valores pares");
