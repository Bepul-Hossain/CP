// https://www.programiz.com/javascript/examples/queue

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    //add a new element
    enqueue(element) {
        this.items[this.tailIndex] = element;
        this.tailIndex++;
    }
    //remove an element from head of the queue
    dequeue() {
        let removedElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removedElement;
    }
    //show the hea element of the queue
    peek() {
        let peekElement = this.items[this.headIndex];
        return peekElement;
    }
    //show the number of items  in queue
    size() {
        return this.tailIndex - this.headIndex;
    }
    //checks if queue is empty or not
    isEmpty() {
        if (this.tailIndex - this.headIndex === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    //empty the queue
    clear() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}

let queue = new Queue();
//add item to queue
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(10);

console.log("Queue after adding items: ");
console.log(queue.items);

// remove the first item
queue.dequeue();

// show the first item
console.log("First item of the queue = " + queue.peek());

// empty the queue
queue.clear();

console.log("After clearing the queue: ");
console.log(queue.items);