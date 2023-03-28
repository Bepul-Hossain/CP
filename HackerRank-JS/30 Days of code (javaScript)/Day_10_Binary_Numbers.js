const prompt = require("prompt-sync")({ sigint: true });
const n = prompt();

let tmp = 0,
  count = 0;
let inputBinary = dec2bin(n);
//console.log(inputBinary);
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

let arr = inputBinary.split("");
arr.forEach((value) => {
  if (value === "1") {
    tmp++;
    if (tmp > count) {
      count = tmp;
    }
  } else {
    tmp = 0;
  }
});
console.log(count);
