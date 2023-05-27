var letterCombinations = function (digits) {
    const hashTable = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    if (!digits) return [];

    let res = [];

    //recursion
    var recursion = function (digits, origLength, str, arr) {

    }
    for (let i = 0; i < digits.length; i++) {
        recursion(digits.slice(1), digits.length, hashTable[digits[0]][i], res)
    }

    return res;
};

console.log(letterCombinations("23"));