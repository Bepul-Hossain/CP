//লিঙ্কড লিস্টের নির্দিষ্ট position এ value insert ও নির্দিষ্ট position থেকে value remove করা ।
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
        this.length++;
        let newNode = createNode(value);
        if (this.tail) {
            this.tail.next = newNode
            this.tail = newNode
            return
        }
        this.head = this.tail = newNode;
        return
    }
    // নির্দিষ্ট position এ value insert 
    insertAtSpecificPosition(value, position) {
        if (this.length >= position) {
            this.length++
            let newNode = createNode(value)
            let count = 1;
            if (position === 0) {
                newNode.next = this.head
                this.head = newNode;
                if (this.length === 0) {
                    this.tail = newNode
                }
            }
            else {
                let beforeNode = this.head
                while (position > count) {
                    beforeNode = beforeNode.next;
                    count++;
                }
                let afterNode = beforeNode.next
                beforeNode.next = newNode
                newNode.next = afterNode;
                return
            }
        }
        else {
            console.log("position should be less than or equal " + this.length);
        }
    }
    // নির্দিষ্ট position থেকে value remove করা
    removeAtSpecificPosition(position) {
        if (position >= this.length) {
            console.log("position should be less than or equal " + this.length);
        }
        else if (this.length <= 0) {
            console.log("No value inserted yet");
        }
        else if (this.length === 1 && position === 0) {
            this.head = this.tail = null;
        }
        else if (position === 0 && this.length > 1) {
            let currentNode = this.head
            this.head = currentNode.next
        }
        else {
            let count = 1;
            this.length--;
            let beforeNode = this.head;
            let removeNode;
            while (position !== count) {
                count++;
                beforeNode = beforeNode.next;
                removeNode = beforeNode.next;
            }
            let afterNode = null;
            if (removeNode) {
                afterNode = removeNode.next;
            }
            beforeNode.next = afterNode
        }
    }
    print() {
        let currentNode = this.head
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        return
    }
}

let list = new LinkList();
list.insert(5);
list.insert(8);
list.insert(9);
//value 12 এবং position 2, ধরে নিলাম 0 based ইন্ডেক্স । তাহলে 8 এর পরে 12 insert হবে । 
list.insertAtSpecificPosition(12, 2)
list.insert(15);
list.insert(17);
//ধরে নিলাম 0 based ইন্ডেক্স । তাহলে 15 remove হবে ।
list.removeAtSpecificPosition(4)
list.print();