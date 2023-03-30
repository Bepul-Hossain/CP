const flipBulbCost = (bits) => {
    let cost = 0;

    for (let bit of bits) {
        if (bit % 2 === 0) bits = bits;
        else bits = !bits;

        if (bit % 2 === 1) continue
        else cost++;
    }

    return cost;
}

console.log(flipBulbCost([0, 1, 0, 1, 1, 0, 1, 1]));