const prompt = require("prompt-sync")({ sigint: true });
const t = Number(prompt());
let value, date;

for (let i = 0; i < t; i++) {
  value = prompt();
  date = new Date(value);

  if (date.getDay() === 0) return "Sunday";
  else if (date.getDay() === 1) return "Monday";
  else if (date.getDay() === 2) return "Tuesday";
  else if (date.getDay() === 3) return "Wednesday";
  else if (date.getDay() === 4) return "Thursday";
  else if (date.getDay() === 5) return "Friday";
  else return "Saturday";
}
// function getDayName(dateString) {
//     let dayName;
//     let date = new Date(dateString);
//     if (date.getDay() === 0) dayName="Sunday";
//     else if (date.getDay() === 1) dayName= "Monday";
//     else if (date.getDay() === 2) dayName= "Tuesday";
//     else if (date.getDay() === 3) dayName= "Wednesday";
//     else if (date.getDay() === 4) dayName= "Thursday";
//     else if (date.getDay() === 5) dayName= "Friday";
//     else dayName= "Saturday";
    
//     return dayName;
// }

