const input = require("fs").readFileSync("../dev/file.txt", "utf8");
const lines = input.split("\n");
var count = 0;
for (let i = 0; i < lines.length; i++) {
  if (Number(lines[i]) > 0) {
    count++;
  }
}
console.log(count+" valores positivos");
