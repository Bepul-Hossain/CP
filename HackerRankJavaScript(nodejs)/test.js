let re =new RegExp(/\d+/g)
const s = "666sks8.9d.kjs";
let res=s.match(re)

console.log(res);
console.log(res[0]);
console.log(res[4]);
for (const e of res) {
    console.log(e);
}

console.log(re.test(s) ? "true" : "false");