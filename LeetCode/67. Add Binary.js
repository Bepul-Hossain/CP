/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let l1 = a.length;
    let l2 = b.length;
    let leftString = "";
    let rightString = "";
    let minString = "";
    let diff = l1 > l2 ? l1 - l2 : l2 - l1;
    if (l1 > l2) {
        leftString = a.slice(0, diff);
        rightString = a.slice(diff);
        minString = b;

    } else if (l2 > l1) {
        leftString = b.slice(0, diff);
        rightString = b.slice(diff);
        minString = a;
    }
    let minlen = l1 > l2 ? l2 : l1;
    let car = 0;
    let str = "";
    for (let i = minlen - 1; i >= 0; i--) {
        if (((rightString[i] - '0') + (minString[i] - '0') + car) === 0) {
            car = 0;
            str = "0" + str;
        } else if (((rightString[i] - '0') + (minString[i] - '0') + car) === 1) {
            car = 0;
            str = "1" + str;
        } else if (((rightString[i] - '0') + (minString[i] - '0') + car) === 2) {
            car = 1;
            str = "0" + str;
        } else if (((rightString[i] - '0') + (minString[i] - '0') + car) === 3) {
            car = 1;
            str = "1" + str;
        }
    }

    let dif = 0;
    if (l1 > l2) {
        dif = l1 - l2;
    } else {
        dif = l2 - l1;
    }
    for (let i = dif - 1; i >= 0; i--) {
        if (((leftString[i] - '0') + car) === 0) {
            car = 0;
            str = "0" + str;
        } else if (((leftString[i] - '0') + car) === 1) {
            car = 0;
            str = "1" + str;
        } else if (((leftString[i] - '0') + car) === 2) {
            car = 1;
            str = "0" + str;
        }
    }
    if (car === 1) {
        str = "1" + str;
    }
    return str;
};

console.log(addBinary("1010", "10111"));
1010
10111
100001