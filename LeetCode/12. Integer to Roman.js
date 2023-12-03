/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const array = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ]
    let res = "";
    for (let i = 0; i < array.length; i++) {
        let [n, sym] = array[i];
        let value = Math.floor(num / n);
        if (value !== 0) {
            res = res + sym.repeat(value);
            num = num % n;
        }
    }
    return res;
};


console.log(intToRoman(2994));