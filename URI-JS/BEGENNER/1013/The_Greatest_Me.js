const prompt = require("prompt-sync")({ sigint: true });
const line = prompt();
const input = line.split(" ");
const A = parseInt(Number(input[0]));
const B = parseInt(Number(input[1]));
const C = parseInt(Number(input[2]));

const maxab = (A + B + Math.abs(A - B)) / 2;
const max = (maxab + C + Math.abs(maxab - C)) / 2;
console.log(max + " eh o maior");
