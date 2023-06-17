var checkStraightLine = function (coordinates) {
    if (coordinates.length <= 2) return true;

    let checkIsLine = (x1, y1, x2, y2, x3, y3) => {
        let slop1 = (y2 - y1) / (x2 - x1);
        let slop2 = (y3 - y2) / (x3 - x2);
        if (slop1 === -Infinity) slop1 = Infinity;
        if (slop2 === -Infinity) slop2 = Infinity;
        return slop1 === slop2;
    }
    let [x1, y1] = coordinates[0];
    let [x2, y2] = coordinates[1];
    for (let i = 2; i < coordinates.length; i++) {
        const [x3, y3] = coordinates[i]
        if (!checkIsLine(x1, y1, x2, y2, x3, y3)) {
            return false;
        }
    }
    return true;

};

console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]));