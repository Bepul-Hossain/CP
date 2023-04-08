var generate = function (numRows) {
    let res = [];
    if (numRows === 1) res.push([1]);

    if (numRows >= 2) {
        res.push([1])
        res.push([1, 1])
    }
    let innerLoop = 0;
    for (let i = 3; i <= numRows; i++) {
        let subArr = [];
        innerLoop++;
        subArr.push(1);
        for (let j = 0; j < innerLoop; j++) {
            const insideValue = res[innerLoop][j] + res[innerLoop][j + 1]
            subArr.push(insideValue)
        }
        subArr.push(1)
        res = [...res, subArr]
    }

    return res
};

console.log(generate(5));