export { }
function getLength(obj: string | string[]) {
    return obj.length;
}
const p = getLength(['3', '5'])
const q = getLength('hello')
console.log(p)
console.log(q);

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        console.log('this is array of string');
        return [obj];
    } else {
        console.log('this is string');

        return obj;
    }
}
console.log(wrapInArray(['3', '7']));
  //console.log(wrapInArray('this is string'));
