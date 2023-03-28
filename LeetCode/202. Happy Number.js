const n = 2;
var isHappy = function (n) {
    let hashMap = new Map();
    if (n === 1) return true;
    while (n) {
        if (n === 1) return true;
        if (hashMap.has(n)) return false;
        hashMap.set(n, true);
        n = squireSome(n);
    }
};
function squireSome(n) {
    let sum = 0;
    while (n) {
        value = n % 10;
        sum = sum + (value * value);
        n = parseInt(n / 10);
    }
    return sum
}
console.log(isHappy(n));