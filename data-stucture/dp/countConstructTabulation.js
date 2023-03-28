const countConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i <= target.length; i++) {
        if (table[i] !== 0) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i]
                }
            }
        }
    }
    return table[target.length]
}

console.log(countConstructTabulation("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstructTabulation("abcdef", ["ab", "abc", "cd", "def", "abcd"])) // 1
console.log(countConstructTabulation("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // 0
console.log(countConstructTabulation("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4

console.log(countConstructTabulation("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee"
])); //0