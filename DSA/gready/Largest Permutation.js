function largestPermutation(k, arr) {
    let length = arr.length;

    while (k > 0) {
        for (let i = 0; i < length; i++) {
            // if (!(arr[i] === length - i)) {
            //     let max = length - i;
            //     for (let j = i; j < length; j++) {
            //         console.log(arr[i]);
            //         if (max === arr[j]) {
            //             arr[j] = arr[i];
            //             arr[i] = max;
            //         }
            //         break
            //     }
            // }
        }
        k--;
    }

    return arr
}

console.log(largestPermutation(1, [1, 2, 3, 4]));