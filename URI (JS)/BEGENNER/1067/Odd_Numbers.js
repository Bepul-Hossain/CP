const input = require("fs").readFileSync("../dev/file.txt", "utf8");

var lines = input.split("\n");

var number = parseInt(lines[0]);

for(let i = 1; i <= number; i++){
  console.log(i++);
}