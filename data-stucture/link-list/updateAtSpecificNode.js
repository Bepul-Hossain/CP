class createNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }
    insert(value) {
        this.length++;
        let newNode = new createNode(value)
        while (this.tail) {
            this.tail.next = newNode
            this.tail = newNode
            return
        }
        this.head = this.tail = newNode
        return
    }
    print() {
        let currentNode = this.head
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next
        }
        return
    }
    updateSpecificNode(value, position) {
        if (position > this.length) {
            console.log("Position should be less than " + this.length);
        } else {
            let updatedNode = this.head
            let count = 0;
            while (position !== count) {
                count++;
                updatedNode = updatedNode.next;
            }
            updatedNode.value = value;
            return
        }
    }
}
let list = new LinkList()
list.insert(5)
list.insert(6)
list.insert(7)

list.print()
console.log("After update");
// updated value 10 and position 1, assume that 0 based indexed
list.updateSpecificNode(10, 1);
list.print()
