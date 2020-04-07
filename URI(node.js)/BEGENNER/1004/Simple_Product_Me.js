const prompt = require("prompt-sync")({ sigint: true });
const A = Number(prompt());
const B = Number(prompt());
console.log("PROD = " + (A * B));
