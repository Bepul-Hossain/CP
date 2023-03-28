const bestSumTabulation = (targetSum, numbers) => {
    const table = new Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num]
                if ((i + num) <= targetSum && (!table[i + num] || table[i + num].length > combination.length)) {
                    table[i + num] = combination;
                }
            }
        }
    }
    return table[targetSum]
}


console.log(bestSumTabulation(7, [5, 3, 4, 7])); //[7]
console.log(bestSumTabulation(8, [2, 3, 5]));//[3,5]
console.log(bestSumTabulation(8, [1, 4, 5]));//[4,4]
console.log(bestSumTabulation(100, [1, 2, 5, 25]));//[25,25,25,25]