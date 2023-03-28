const prompt = require("prompt-sync")({ sigint: true });
const A = prompt();
const B = Number(prompt());
const C = Number(prompt());

console.log("TOTAL = R$ " + (B + 0.15 * C).toFixed(2));
