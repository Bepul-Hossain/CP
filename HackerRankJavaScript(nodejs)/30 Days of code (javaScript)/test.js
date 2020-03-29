function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  //console.log(initialAge);

  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.");
    initialAge = 0;
  }

  this.age = initialAge;
  console.log('this.age '+this.age);

  this.amIOld = function() {
    console.log(this.age);

    // Do some computations in here and print out the correct statement to the console
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
  this.yearPasses = function() {
    console.log(this.age);

    this.age++;
    // Increment the age of the person in here
  };
}

var p = new Person(7);
//Person(5);
p.amIOld();
for (j = 0; j < 3; j++) {
  p.yearPasses();
}
p.amIOld();
console.log("");
