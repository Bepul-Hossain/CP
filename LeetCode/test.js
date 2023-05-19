const secondLerge = (arr) => {
    let max = -Infinity;
    let secMax = -Infinity;
    let thirdMax = -Infinity;
    for (const num of arr) {
        if (num > max) {
            thirdMax = secMax;
            secMax = max;
            max = num;
        } else if (num > secMax) {
            thirdMax = secMax;
            secMax = num;
        } else if (num > thirdMax) {
            thirdMax = num;
        }
    }
    return thirdMax;
}

console.log(secondLerge([1, 3, 6, -1, 0, 2, 8, 7]));