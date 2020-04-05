const input = require("fs").readFileSync("../dev/file.txt", "utf8");
const lines = input.split("\n");

const A = parseInt(lines[0]);
var res = {
  61: "Brasilia",
  71: "Salvador",
  11: "Sao Paulo",
  21: "Rio de Janeiro",
  32: "Juiz de Fora",
  19: "Campinas",
  27: "Vitoria",
  31: "Belo Horizonte",
};
if (res[A] === undefined) {
  console.log("DDD nao cadastrado");
} else {
  console.log(res[A]);
}
