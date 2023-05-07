/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let char = senate[0];
    var re = new RegExp(char, "g");

    let n = senate.length;
    let n2 = senate.replace(re, '').length;


    if ((n2 * 2) > n) {
        if (char === "D") {
            return "Radiant";
        } else {
            return "Dire"
        }
    } else {
        if (char === "R") {
            return "Radiant";
        } else {
            return "Dire";
        }
    }
};

console.log(predictPartyVictory("DDRRR"));