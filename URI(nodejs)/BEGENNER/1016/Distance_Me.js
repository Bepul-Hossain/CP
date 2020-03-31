const prompt = require("prompt-sync")({ sigint: true });

const line1 = parseInt(Number(prompt()));
console.log(2*line1+" minutos");
