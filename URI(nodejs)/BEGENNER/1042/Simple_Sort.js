var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

var arr = [];
for (let i = 0; i < lines.length; i++) {
  arr[i] = parseInt(Number(lines[i]));
}
var res = [];
res = arr.sort(function(a,b){
    return a-b;
});

for (let i = 0; i < lines.length; i++) {
  console.log(res[i]);
}
console.log();
for (let i = 0; i < lines.length; i++) {
  console.log(lines[i]);
}
