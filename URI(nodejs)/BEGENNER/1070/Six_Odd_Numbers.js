const input = require("fs").readFileSync("../dev/file.txt", "utf8");

var lines = input.split("\n");

var number = parseInt(lines[0]);
var p;
if(number%2===0){
   p=parseInt(1)
}else{
    p=parseInt(2)
}

for(let i = p; i <= 12; i=i+2){
  console.log(number+i);
}