// arr = [0,0,1,5,0,9,0,4]
// output = [0,0,0,0,1,5,9]

var ans = (arr) => {
    let left = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            left--;
            while (arr[left] === 0) {
                left--;
            };
            if (left < 0) return arr;
            arr[i] = arr[left];
            arr[left] = 0;
        }
    }
    return arr;
}
console.log(ans([0, 0, 1, 5, 0, 9, 0, 4]));

// // arr = [0,0,1,5,0,9,0]
// // output = [0,0,0,0,1,5,9]

// var ans = (arr) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === 0) {
//             for (let j = i - 1; j >= 0; j--) {
//                 if (arr[j] !== 0) {
//                     arr[i] = arr[j];
//                     arr[j] = 0;
//                     break;
//                 }
//             }
//         }
//     }
//     return arr;
// }
// console.log(ans([0, 0, 1, 5, 0, 9, 0]));