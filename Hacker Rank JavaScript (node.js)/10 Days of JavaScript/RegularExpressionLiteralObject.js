//object
//const re= new RegExp('[^A-Z]')
//literal
//const re=/([A-Z]|i)/
//const re=/i(?= am)/
const re =/i(.+?(am))/
//const re =/i(.+?( am))/


const s1='learn '
const s2='i a a am student'
const s3='i am a learn student'

console.log(re.test(s1));
console.log(re.test(s2))
console.log(re.test(s3))

