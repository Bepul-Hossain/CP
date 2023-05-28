/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function (nums) {
    if (nums.length === 1) return nums[0];
    let positiveArray = nums.filter((num) => num > 0);
    let prod = 1;
    if (positiveArray.length > 0) {
        for (let i = 0; i < positiveArray.length; i++) {
            prod = prod * positiveArray[i];
        }
    } else {
        prod = undefined;
    }
    let isZero = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            isZero = true;
            break;
        }
    }

    let negativeArray = nums.filter((num) => num < 0);
    let max = -Infinity;
    if (negativeArray.length % 2 === 1) {
        for (let i = 0; i < negativeArray.length; i++) {
            if (negativeArray[i] > max) {
                max = negativeArray[i]
            }
        }
    }
    if (max === -Infinity) {
        max = undefined;
    }
    console.log(negativeArray);

    let negProd = 1;
    if (negativeArray.length === 1) {
        negProd = negativeArray[0];
    }
    else {
        for (let i = 0; i < negativeArray.length; i++) {
            negProd = negProd * negativeArray[i];
        }
    }
    if (max !== undefined) {

        negProd = negProd / max;
    }

    if (prod * negProd > 0) {
        return prod * negProd;
    }
    else if (prod > 0) {
        return prod
    }
    else if (negProd > 0) {
        return negProd;
    }
    else if (isZero) {
        return 0;
    }
};

console.log(maxStrength([0, -4, -7]));