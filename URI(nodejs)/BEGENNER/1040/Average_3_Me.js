const prompt = require("prompt-sync")({ sigint: true });
const input = prompt();
const lines = input.split(" ");

const N1 = 2 * parseFloat(Number(lines[0]));
const N2 = 3 * parseFloat(Number(lines[1]));
const N3 = 4 * parseFloat(Number(lines[2]));
const N4 = parseFloat(Number(lines[3]));
var average = parseFloat((Number(N1 + N2 + N3 + N4) / 10).toFixed(1));

console.log("Media: " + average);
if (average >= 7.0) {
  console.log("Aluno aprovado.");
} else if (average < 5.0) {
  console.log("Aluno reprovado.");
} else {
  console.log("Aluno em exame.");
  const lines2 = parseFloat(Number(prompt()));
  console.log("Nota do exame: " + lines2);
  console.log("Aluno aprovado.");

  console.log("Media final: "+parseFloat((average + lines2)/2));
}
