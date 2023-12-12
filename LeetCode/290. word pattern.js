var wordPattern = function (pattern, s) {
    const arr = s.split(" ");
    const obj = {};

    if (arr.length !== pattern.length ||
        new Set([...pattern]).size !== new Set(arr).size) return false;

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = arr[i];
        if (obj[p] === undefined) {
            obj[p] = w;
        }
        else if (obj[p] !== w) {
            return false;
        }
    }
    return true;
};

console.log(wordPattern("abba", "dog dog dog dog"));
