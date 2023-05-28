/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    let min = Infinity
    let secondMin = Infinity;

    for (const num of prices) {
        if (num < min) {
            secondMin = min;
            min = num;
        }
        else if (num < secondMin) {
            secondMin = num;
        }
    }

    let sub = money - (min + secondMin);
    return sub >= 0 ? sub : money;
};

console.log(buyChoco([6, 3, 5], 3));