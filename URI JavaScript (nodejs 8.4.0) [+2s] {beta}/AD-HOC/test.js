var big64=new BigUint64Array(4)
var p=2863311530n


big64[0]=p;
var p =big64[0]
console.log(p);

console.log(p.toString());

big64[1]=1431655765n;
console.log(big64);
console.log(big64.length);
var q=big64[0]^big64[1]
console.log(q.toString());

var buffer=new ArrayBuffer(40)
var z=new BigUint64Array(buffer,0,4)
console.log(z);

