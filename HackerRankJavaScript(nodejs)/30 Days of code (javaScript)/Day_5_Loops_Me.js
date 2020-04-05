const prompt = require("prompt-sync")({ sigint: true });
const n = Number(prompt());
for (let i = 1; i <= 10; i++) {
  console.log(n + " x " + i + " = " + i * n);
}
