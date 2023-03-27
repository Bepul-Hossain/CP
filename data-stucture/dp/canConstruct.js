const canConstruct = (target, wordBank, memo = {}) => {

    if (target in memo) return memo[target];
    if (target === "") return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target]
                return true;
            }
        }
    }
    memo[target] = false;
    return false;

}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])) // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true

console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee"
])); //false