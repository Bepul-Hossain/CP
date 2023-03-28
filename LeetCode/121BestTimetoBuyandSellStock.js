let prices = [7, 6, 4, 3, 1, 3]

var maxProfit = function (prices) {
    let [left, i, max] = [0, 1, 0];

    while (i < prices.length) {
        if (prices[i] <= prices[left]) {
            left = i;
        }
        const value = prices[i] - prices[left];
        max = Math.max(max, value)
        i++;
    }

    return max;
};

let res = maxProfit(prices);
console.log(res);