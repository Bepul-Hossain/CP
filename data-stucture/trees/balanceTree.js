function createNode(value) {
    return {
        value: value,
        left: null,
        right: null,
        height: 1
    }
}

class AVLTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = createNode(value)
        if (this.root !== null) {

            return
        }
        this.root = newNode
        return
    }
    //in-order
    printInOrder(currentNode = this.root) {
        if (currentNode === null) {
            return
        }
        console.log(currentNode.value)
        this.printInOrder(currentNode.left)
        this.printInOrder(currentNode.right)
    }
}

let tree = new AVLTree()
tree.insert(5);
tree.printInOrder()