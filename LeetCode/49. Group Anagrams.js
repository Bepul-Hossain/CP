var groupAnagrams = function (strs) {
    const map = new Map()
    for (const str of strs) {
        sortString = str.split("").sort((a, b) => a.localeCompare(b)).join("");
        const val = map.get(sortString) || [];
        val.push(str);
        map.set(sortString, val);
    }
    return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));