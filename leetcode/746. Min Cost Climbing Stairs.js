const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

var minCostClimbingStairs = function (cost) {
    let length = cost.length;
    let tmp1 = cost[length - 1];
    let tmp2 = cost[length - 2];
    for (let i = length - 3; i >= 0; i--) {
        if (tmp1 < tmp2) {
            cost[i] += tmp1;
        } else {
            cost[i] += tmp2;
        }
        tmp1 = cost[i + 1];
        tmp2 = cost[i];
    }
    if (tmp1 < tmp2) {
        return tmp1;
    } else {
        return tmp2;
    }
};
console.log(minCostClimbingStairs(cost));