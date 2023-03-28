//can target sum

const canTargetSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canTargetSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canTargetSum(7, [2, 3]));
console.log(canTargetSum(7, [5, 3, 4, 7]));
console.log(canTargetSum(7, [2, 4]));
console.log(canTargetSum(8, [2, 3, 5]));
console.log(canTargetSum(300, [7, 14]));//false