const re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;
const s = "Er.ab";
//const s = 'abkdkjdka';
console.log(re.test(s) ? "true" : "false");