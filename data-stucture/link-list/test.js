// https://sebhastian.com/linked-list-javascript/
function createNode(value) {
    return {
        value: value,
        next: null
    }
}

// let newNode = createNode("hello")
// console.log(newNode);

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(value) {
        this.length++;
        let newNode = createNode(value);
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            // console.log(this.tail);
            return newNode;
        }
        this.head = this.tail = newNode;
        return newNode;
    }
    remove() {
        if (this.tail) {
            this.length--;
            const tailNode = this.tail;
            //search for the node before tail
            let currentNode = this.head;
            // The while loop stops when the node next to tail node is found

            while (currentNode.next != tailNode) {
                currentNode = currentNode.next;
            }
            const beforeTrail = currentNode;
            this.tail = beforeTrail;
            this.tail.next = null;
            return tailNode;
        }
        return undefined;
    }
    insertHead(value) {
        this.length++;
        let newNode = createNode(value);
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }
        this.head = this.tail = newNode;
        return newNode;
    }
    removeHead() {
        if (this.head) {
            this.length--;
            const removeNode = this.head;
            this.head = this.head.next;
            return removeNode;
        }
        return undefined;
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const linkList = new LinkList();
linkList.insert(7);
linkList.insert(true);
linkList.print()
linkList.remove();
console.log("=========");
linkList.print();