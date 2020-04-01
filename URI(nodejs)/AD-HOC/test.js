const prompt = require("prompt-sync")({ sigint: true });
var line;
var input;
var A;
var B;
while ((line = prompt())) {
  input = line.split(" ");
  A = parseInt(input[0]);
  B = parseInt(input[1]);
  console.log(A ^ B);
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
for (var i = 0; lines[i] != ""; i++) { 
    var strings = lines[i].split(" ");
    var m = parseInt(strings[0]);
    var n = parseInt(strings[1]);

    var factm = 1;
    var factn = 1;
    for (var a = m; a != 0; a--) {
        factm *= a;
    }
    for (var b = n; b != 0; b--) {
        factn *= b;
    }
    var sum = factn + factm;
    console.log(sum);
}