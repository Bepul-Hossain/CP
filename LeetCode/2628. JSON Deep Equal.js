/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
const isObj = (val) => {
    return val != null && typeof val === "object";
}
//boolean, number, string, char, array, obj

var areDeeplyEqual = function (o1, o2) {
    if (o1 === o2) return true;

    // If any of o1 or o2 is not an object, they are different values
    if (typeof o1 != 'object' || typeof o2 != 'object') return false;

    // Both of them should be objects or arrays
    if (Array.isArray(o1) !== Array.isArray(o2)) return false;

    const o1key = Object.keys(o1);
    const o2key = Object.keys(o2);
    if (o1key.length !== o2key.length) return false;

    for (let key of o1key) {
        const val1 = o1[key];
        const val2 = o2[key];
        const checkObj = isObj(val1) && isObj(val2);
        if ((checkObj && !areDeeplyEqual(val1, val2)) || (!checkObj && val1 !== val2)) {
            return false;
        };
    };
    return true;
};
console.log(areDeeplyEqual({ "x": 1, "y": { "a": 3 } }, { "x": 1, "y": { "a": 3 } }));