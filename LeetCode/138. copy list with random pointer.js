function Node(val, next, random) {
    this.val = val;
    this.next = next || null;
    this.random = random || null;
}

const arrayToLinkedList = (array) => {
    if (array.length > 0) {
        const item = array[0];
        return new Node(item[0], arrayToLinkedList(array.slice(1)), item[1]);
    }
}
var copyRandomList = function (head) {
    if (head === null) return null;

    const nodeMap = new Map();
    // First pass: Create new nodes for each old node and store them in the map
    let cur = head;
    while (cur !== null) {
        let oldNode = cur;
        let newNode = new Node(oldNode.val);
        nodeMap.set(oldNode, newNode);
        cur = cur.next;
    }
    // Second pass: Update the 'next' and 'random' pointers for the new nodes
    cur = head;
    while (cur !== null) {
        let newNode = nodeMap.get(cur);
        newNode.next = nodeMap.get(cur.next) || null;
        newNode.random = nodeMap.get(cur.random) || null;
        cur = cur.next;
    }
    // console.log(JSON.stringify(nodeMap.get(head)));
    return nodeMap.get(head);
};


copyRandomList(arrayToLinkedList([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]));