const prompt = require("prompt-sync")({ sigint: true });

const line1 = prompt();
const input1 = line1.split(" ");
const x1 = parseFloat(input1[0]);
const y1 = parseFloat(input1[1]);

const line2 = prompt();
const input2 = line2.split(" ");
const x2 = parseFloat(input2[0]);
const y2 = parseFloat(input2[1]);

const p1 = Math.abs(x1 - x2);
const p2 = Math.abs(y1 - y2);

const distance = Math.sqrt(p1 * p1 + p2 * p2);

console.log(distance.toFixed(4));
