const prompt = require("prompt-sync")({ sigint: true });
const input = prompt();
var lines = input.split(" ");

var vetor = [];
var vetor_old = [];

vetor[0] = parseInt(lines[0]);
vetor[1] = parseInt(lines[1]);
vetor[2] = parseInt(lines[2]);

vetor_old = vetor.slice();

function sortfunction(a, b) {
  return a - b;
}
vetor.sort(sortfunction);
console.log(vetor[0]);
console.log(vetor[1]);
console.log(vetor[2]);

console.log("\n" + vetor_old[0]);
console.log(vetor_old[1]);
console.log(vetor_old[2]);
