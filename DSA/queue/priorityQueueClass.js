// https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        let qElement = new QElement(element, priority);
        let contain = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    rear() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printPQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str = str + this.items[i].element + " ";
        }
        return str;
    }
}

// creating object for queue class
var priorityQueue = new PriorityQueue();

// testing isEmpty and front on an empty queue
// return true
console.log(priorityQueue.isEmpty());

// returns "No elements in Queue"
console.log(priorityQueue.front());


// adding elements to the queue
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);

// prints [Gourav Piyush Sumit Sunny Sheru]
console.log(priorityQueue.printPQueue());

// prints Gourav
console.log(priorityQueue.front().element);

// prints Sheru
console.log(priorityQueue.rear().element);

// removes Gouurav
// priorityQueue contains
// [Piyush Sumit Sunny Sheru]
console.log(priorityQueue.dequeue().element);

// Adding another element to the queue
priorityQueue.enqueue("Sunil", 2);

// prints [Piyush Sumit Sunny Sunil Sheru]
console.log(priorityQueue.printPQueue());