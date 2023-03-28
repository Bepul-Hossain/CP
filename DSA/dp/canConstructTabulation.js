const canConstructTabulation = (targetString, wordBank) => {
    const table = new Array(targetString.length + 1).fill(false)
    table[0] = true;
    for (let i = 0; i <= targetString.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                if (targetString.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[targetString.length]
}

console.log(canConstructTabulation("abcdef", ["ab", "abc", "cd", "def", "abcd"])) // true
console.log(canConstructTabulation("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // false
console.log(canConstructTabulation("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true

console.log(canConstructTabulation("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee"
])); //false