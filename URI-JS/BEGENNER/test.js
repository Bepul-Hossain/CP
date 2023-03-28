var input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(" ");
const lines3 = input.split("\n");

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
} else if (average >= 5.0 && average <= 6.9) {
  console.log("Aluno em exame.");
  var lines2 = parseFloat(Number(lines3[1]));
  console.log("Nota do exame: " + lines2);
  average = (average + lines2) / 2;
  if (average >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log("Media final: " + average.toFixed(1));
}
