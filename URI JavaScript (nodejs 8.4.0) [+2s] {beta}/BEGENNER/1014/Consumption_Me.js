const prompt = require("prompt-sync")({ sigint: true });
const X = prompt();
const Y = prompt();
console.log((X/Y).toFixed(3)+" km/l");


