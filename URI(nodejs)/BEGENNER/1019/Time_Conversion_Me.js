const prompt = require("prompt-sync")({ sigint: true });

var N = parseInt(Number(prompt()));
const hour = parseInt(N / 3600);
N %= 3600;
const minute = parseInt(N / 60);
N %= 60;
const second = parseInt(N);

console.log(hour+":"+minute+":"+second);
