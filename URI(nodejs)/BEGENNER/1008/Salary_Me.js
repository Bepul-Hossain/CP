const prompt = require("prompt-sync")({ sigint: true });
const A = Number(prompt());
const B = Number(prompt());
const C = Number(prompt());
console.log("NUMBER = " + A);
console.log("SALARY = U$ "+(B*C).toFixed(2));

