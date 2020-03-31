const prompt = require("prompt-sync")({ sigint: true });
const A =3.5* Number(prompt());
const B =7.5* Number(prompt());
console.log("MEDIA = " + ((A + B)/11).toFixed(5));
