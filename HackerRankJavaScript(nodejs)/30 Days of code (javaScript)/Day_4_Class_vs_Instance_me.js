const prompt = require("prompt-sync")({ sigint: true });

function Person(initialAge) {
  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.");
    initialAge = 0;
  }
  this.age = initialAge;
  //console.log(this.age);

  this.amIOld = function() {
    if (age < 13) {
      console.log("You are young.");
    } else if (age >= 13 && age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
  this.yearPasses = function() {
    age++;
    //console.log('y = '+age);
  };
}

const T = prompt();
var p = new Person();
for (let i = 0; i < T; i++) {
  var age = prompt();
  Person(age);
  p.amIOld();
  for (let j = 0; j < 3; j++) {
    p.yearPasses();
  }
  p.amIOld();
}
