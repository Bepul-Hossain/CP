var input = require("fs").readFileSync("../dev/file.txt", "utf8");
const linesF = input.split('\n');
const lines =linesF[0].split(" ");
const N1 = 2 * parseFloat(lines[0]);
const N2 = 3 * parseFloat(lines[1]);
const N3 = 4 * parseFloat(lines[2]);
const N4 = parseFloat(lines[3]);
var average = parseFloat((N1 + N2 + N3 + N4) / 10).toFixed(1);

console.log("Media: " + average);
if (average >= 7.0) {
  console.log("Aluno aprovado.");
} else if (average < 5.0) {
  console.log("Aluno reprovado.");
} else if (average >= 5.0 && average <= 6.9) {
  console.log("Aluno em exame.");
  const lines2 = parseFloat(linesF[1]);
  console.log("Nota do exame: " + lines2);
  
   var p = parseFloat(average);
   var media=(p+lines2)/2

  
  if (media >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log("Media final: " + parseFloat(media).toFixed(1));
}
