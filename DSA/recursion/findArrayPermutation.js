//difficult. not done yet

const findArrayPermutation = (arr) => {
    if (arr.length < 2) return arr;

    let res = [];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const remainArr = arr.slice(0, i) + arr.slice(i + 1)
        for (let permutation of findArrayPermutation(remainArr)) {
            const per = permutation.slice("");
            res.push([num + per])
        }
    }
    return res;
}
console.log(findArrayPermutation([1, 2, 3]));