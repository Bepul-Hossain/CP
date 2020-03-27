const prompt = require("prompt-sync")({ sigint: true });
const t = Number(prompt());
let value, date;
//console.log('t '+t);

for (let i = 0; i < t; i++) {
  value = prompt();
  date = new Date(value);
  //console.log('date '+date);
  
  if (date.getDay() === 0) console.log("Sunday");
  else if (date.getDay() === 1) console.log("Monday");
  else if (date.getDay() === 2) console.log("Tuesday");
  else if (date.getDay() === 3) console.log("Wednesday");
  else if (date.getDay() === 4) console.log("Thursday");
  else if (date.getDay() === 5) console.log("Friday");
  else console.log("Satarday");
}
