const prompt = require("prompt-sync")({ sigint: true });
var re='false';
var str = prompt();
console.log(str.length);

function regexVar(str) {
  if (
    (str[0] === "a") |
    (str[0] === "e") |
    (str[0] === "i") |
    (str[0] === "o") |
    (str[0] === "u")
  ) {
    if (str[0] === str[str.length - 1]) {
      re = "true";
      
    } else {
      re = "false";
     
    }
  }
  
  console.log(re);
  //return re;
}
regexVar(str);
