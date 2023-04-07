const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let largest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[largest] < arr[j]) {
                largest = j;
            }
        }
        [arr[largest], arr[i]] = [arr[i], arr[largest]]
    }
    return arr;
}

console.log(selectionSort([2, 2, 1, 5, 3]));