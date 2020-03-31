const prompt = require("prompt-sync")({ sigint: true });
const line = prompt();
const input = line.split(" ");
const A = parseInt(Number(input[0]));
const B = parseInt(Number(input[1]));
const C = parseInt(Number(input[2]));
const D = parseInt(Number(input[3]));

if (B > C && D > A && C + D > A + B && C > -1 && D > -1 && A % 2 === 0) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
