const prompt = require("prompt-sync")({ sigint: true });
const input = prompt();
var lines = input.split(" ");

const a = parseFloat(Number(lines[0]));
const b = parseFloat(Number(lines[1]));
const c = parseFloat(Number(lines[2]));

const p = b * b - 4 * a * c;
if (a === 0 || p < 0) {
  console.log("Impossivel calcular");
} else {
  console.log("R1 = " + ((-b + Math.sqrt(p)) / (2 * a)).toFixed(5));
  console.log("R2 = " + ((-b - Math.sqrt(p)) / (2 * a)).toFixed(5));
}
