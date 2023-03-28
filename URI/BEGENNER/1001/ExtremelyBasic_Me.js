const prompt = require("prompt-sync")({ sigint: true });
const A = Number(prompt());
const B = Number(prompt());
const X = A + B;
console.log("X = " + X);
