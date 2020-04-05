var input = require("fs").readFileSync("../dev/file.txt", "utf8");
var lines = input.split("\n");

var even = 0;
var odd = 0;
var positivos = 0;
var negativos = 0;

for (let i = 0; i < 5; i++) {
  lines[i] = parseInt(lines[i]);

  if (lines[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }

  if (lines[i] > 0) {
    positivos++;
  } else if (lines[i] < 0) {
    negativos++;
  }
}

console.log(
  even +
    " valor(es) par(es)\n" +
    odd +
    " valor(es) impar(es)\n" +
    positivos +
    " valor(es) positivo(s)\n" +
    negativos +
    " valor(es) negativo(s)"
);
