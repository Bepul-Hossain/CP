const s = "()[](()){}"


var isValid = function (s) {
    let size = s.length;
    if (size % 2 != 0) return false
    while (size) {
        let s1 = size;
        s = s.replace("()", "");
        s = s.replace("{}", "");
        s = s.replace("[]", "");

        size = s.length;

        if (!size) {
            return true;
        }
        if (s1 === size) {
            return false;
        }
    }

};

var p = isValid(s);
console.log(p);