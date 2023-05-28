function PriorityQueue() {
    let collection = [];

    this.print = function () {
        console.log(collection);
    }

    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element)
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] > collection[i][1]) {     // checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    }

    this.dequeue = function () {
        let el = collection.shift();
        return el[0];
    }

    this.font = function () {
        return collection[0];
    }

    this.size = function () {
        return collection.length;
    }

    this.isEmpty = function () {
        return collection.length === 0;
    }
}

let pq = new PriorityQueue();


var minExtraChar = function (s, dictionary) {
    for (let i = 0; i < dictionary.length; i++) {
        pq.enqueue([dictionary[i], dictionary[i].length]);
    }
    console.log(pq.print());
    while (!pq.isEmpty()) {
        let text = pq.dequeue();
        let re = new RegExp(text, "g");
        s = s.replace(re, "*");
    }
    let count = 0;
    let i = 0;
    console.log(s);
    while (i < s.length) {
        if (s[i] !== "*") {
            count++;
        }
        i++;
    }
    return count;
};

console.log(minExtraChar("rkmsilizktprllwoimafyuqmeqrujxdzgp",
    ["afy", "lyso", "ymdt", "uqm", "cfybt", "lwoim", "hdzeg", "th", "rkmsi", "d", "e", "tp", "r", "jx", "tofxe", "etjx", "llqs", "cpir", "p", "ncz", "ofeyx", "eqru", "l", "demij", "tjky", "jgodm", "y", "ernt", "jfns", "akjtl", "wt", "tk", "zg", "lxoi", "kt"]));