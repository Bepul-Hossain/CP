//লিঙ্কড লিস্টের নির্দিষ্ট position এ value insert ও নির্দিষ্ট position থেকে value remove করা ।
class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
    }
    push(value) {
        if (this.head === null) {
            return this.head = new node(value)
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new node(value)
    }

    //delete node
    pop(position) {
        let counter = 1;
        let lead = this.head;
        if (position === 1) {
            this.head = this.head.next;
        } else {
            while (counter < position - 1) {
                lead = lead.next;
                counter++;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
        }

    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkList();
list.push(10);
list.push(13)
list.push(14)
list.push(15)
list.pop(3)
list.print();