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
                if (element[1] < collection[i][1]) {     // checking priorities
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
pq.enqueue(['Golam', 2]);
pq.enqueue(['Rakib sheikh', 3]);
pq.enqueue(['Shohan pramanik', 1]);
pq.enqueue(['Arup Sarkar', 5]);

pq.print();
pq.dequeue();
pq.font();
pq.print();