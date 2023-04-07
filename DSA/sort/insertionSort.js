const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i]
        let j = i - 1;
        while (j >= 0 && tmp < arr[j]) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = tmp;
    }
    return arr
}
console.log(insertionSort([2, 3, 1]));