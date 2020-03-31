const prompt = require("prompt-sync")({ sigint: true });
const A = 2 * Number(prompt());
const B = 3 * Number(prompt());
const C = 5 * Number(prompt());
console.log("MEDIA = " + ((A + B + C) / 10).toFixed(1));
