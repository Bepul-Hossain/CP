function createNode(value) {
    return {
        value: value,
        next: null
    }
}

class list {
    constructor() {
        this.head = null;
    }
    insert(value) {
        let newNode = createNode(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;

        return current
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        return undefined;
    }
    reverse_list() {
        let currentNode = this.head;
        if (currentNode === null) return;

        let prevNode = null;
        let nextNode;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode

    }
}

let LinkList = new list();
LinkList.insert(5)
LinkList.insert(6)
LinkList.insert(2)
LinkList.print();
LinkList.reverse_list();
console.log("=============");
LinkList.print();


