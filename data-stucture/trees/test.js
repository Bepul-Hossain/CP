removeNode(currentNode, value) {//30
    if (currentNode === null) {
        return null
    }
    if (currentNode.left === null && currentNode.right === null) {
        return null
    }
    currentNode.left = this.removeNode(currentNode.left, value)//10{left: null, right:15{left: null, right: null} }
    currentNode.right = this.removeNode(currentNode.right, value)
    return currentNode
}
