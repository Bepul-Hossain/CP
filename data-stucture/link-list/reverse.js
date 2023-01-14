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
    insert(value) {
        let newNode = createNode(value)
        while (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            return
        }
        this.head = this.tail = newNode
    }
    print() {
        let currentNode = this.head
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next
        }
    }
    reverse() {
        let prevNode = null;
        let currentNode = this.head
        let nextTmpNode = null;
        while (currentNode != null) {
            nextTmpNode = currentNode.next
            console.log(nextTmpNode);
            currentNode.next = prevNode
            prevNode = currentNode
            currentNode = nextTmpNode
        }
        this.head = prevNode;
        return
    }
}

let list = new LinkList;
list.insert(5)
list.insert(7)
list.insert(10)
list.reverse();
list.print()