var maxDivScore = function (nums, divisors) {
    let n = nums.length
    let res = divisors[0];
    let tmp = 0;
    for (let j = 0; j < divisors.length; j++) {
        let count = 0;
        for (let i = 0; i < n; i++) {
            if ((nums[i] % divisors[j]) === 0) {
                count++
            }
        }
        if (count > tmp) {
            tmp = count;
            res = divisors[j];
        }
        if (count === tmp) {
            if (res > divisors[j]) {
                res = divisors[j]
            }
        }
    }
    return res;
};
console.log(maxDivScore([12], [10, 16]));