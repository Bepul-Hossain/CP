var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

var arr = [a, b, c];

function sortNumber(a, b) {
  return b - a;
}
function todoTriangle(element, index, array) {
  return element == array[0];
}

arr.sort(sortNumber);

a = arr[0];
b = arr[1];
c = arr[2];

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else if (a * a == b * b + c * c) {
  console.log("TRIANGULO RETANGULO");
} else if (a * a > b * b + c * c) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (a * a < b * b + c * c) {
  console.log("TRIANGULO ACUTANGULO");
}

if (arr.every(todoTriangle)) {
  console.log("TRIANGULO EQUILATERO");
} else if (a == b || a == c || b == c) {
  console.log("TRIANGULO ISOSCELES");
}
