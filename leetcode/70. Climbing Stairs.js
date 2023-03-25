const n = 4;
var climbStairs = function (n) {
    let [one, two] = [1, 1]
    let tmp
    for (let i = 0; i < n; i++) {
        tmp = one;
        one = one + two;
        two = tmp
    }
    return two;
};
console.log(climbStairs(n));