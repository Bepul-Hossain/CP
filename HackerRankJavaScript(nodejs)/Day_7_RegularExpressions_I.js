const re = /^([aeiou])(.)+\1$/;
const s = "abkdkjdkau";
//const s = 'abkdkjdka';
console.log(re.test(s) ? "true" : "false");