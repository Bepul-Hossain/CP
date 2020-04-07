const prompt=require('prompt-sync')({sigint: true})

var lines=Number(prompt());

var entrada = parseFloat(lines);

if (0 <= entrada && entrada <= 25) {
  console.log("Intervalo [0,25]");
} else if (25 < entrada && entrada <= 50) {
  console.log("Intervalo (25,50]");
} else if (50 < entrada && entrada <= 75) {
  console.log("Intervalo (50,75]");
} else if (75 < entrada && entrada <= 100) {
  console.log("Intervalo (75,100]");
} else {
  console.log("Fora de intervalo");
}