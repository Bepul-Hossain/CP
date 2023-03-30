const fun = function (A) {
    A.sort((a, b) => a[1] - b[1]);

    let res = 1;
    let index = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i][0] > A[index][1]) {
            res++;
            index = i;
        }
    }

    return res;

}
console.log(fun([
    [1, 4],
    [2, 3],
    [4, 6],
    [8, 9],
]));