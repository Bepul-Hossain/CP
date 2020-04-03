var input = require("fs").readFileSync("../dev/file.txt", "utf8");
var lines = input.split("\r\n");

var a = lines[0];
var b = lines[1];
var c = lines[2];

var animal = {
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      onivoro: "pomba"
    },
    mamifero: {
      onivoro: "homem",
      herbivoro: "vaca"
    }
  },
  invertebrado: {
    inseto: {
      hematofago: "pulga",
      herbivoro: "lagarta"
    },
    anelideo: {
      hematofago: "sanguessuga",
      onivoro: "minhoca"
    }
  }
};
console.log(animal[a][b][c]);
