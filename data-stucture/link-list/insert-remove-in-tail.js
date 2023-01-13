//লিঙ্কড লিস্টের tail এ value insert ও tail থেকে value remove করা ।
function createNode(value) {
    return {
        value: value,
        next: null
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertAtTail(value) {
        this.length++;
        let newNode = createNode(value);
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            // console.log(newNode);
            return
        }
        this.head = newNode;
        this.tail = newNode;
        return
    }
    removeFromTail() {
        if (this.tail) {
            this.length--;
            const tailNode = this.tail;
            let currentNode = this.head
            while (currentNode.next != tailNode) {
                currentNode = currentNode.next;
            }
            let beforeTailNode = currentNode;
            this.tail = beforeTailNode
            this.tail.next = null;
            return
        }
        return
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        return
    }
}

let list = new LinkList();
list.insertAtTail(5);
list.insertAtTail(6);
list.insertAtTail(7);
list.removeFromTail();
list.print();
// console.log(list);