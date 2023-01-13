//লিঙ্কড লিস্টের head এ value insert ও head থেকে value remove করা ।

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
    insertAtHead(value) {
        this.length++
        let newNode = createNode(value)
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
            return
        }
        this.head = this.tail = newNode;
        return
    }
    removeFromHead() {
        if (this.head) {
            this.length--;
            this.head = this.head.next
            return
        }
        return
    }
    print() {
        let current = this.head
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        return undefined
    }
}

let list = new LinkList();

list.insertAtHead(5)
list.insertAtHead(7)
list.insertAtHead(8)
list.removeFromHead();
list.print();