// https://anindyaspaul.com/blog/2013/12/06/counting-sort/

const countSort = (arr) => {
    //find min and max value
    const min = arr.reduce((a, b) => Math.min(a, b));
    const max = arr.reduce((a, b) => Math.max(a, b));

    const countArr = Array(max - min + 1).fill(0);
    for (let num of arr) {
        countArr[num]++;
    }
    res = []
    for (let i = min; i <= max; i++) {
        for (let j = 0; j < countArr[i]; j++) {
            res.push(i)
        }
    }
    return res;
}

console.log(countSort([2, 5, 3, 0, 2, 3, 0, 3]));