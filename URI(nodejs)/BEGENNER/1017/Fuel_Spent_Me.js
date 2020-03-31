const prompt = require("prompt-sync")({ sigint: true });

const line1 = parseInt(Number(prompt()));
const line2 = parseInt(Number(prompt()));

console.log(((line2 * line1) / 12).toFixed(3));
