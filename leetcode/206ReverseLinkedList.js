function createNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let head = [1, 2, 3, 4, 5]

var reverseList = function (head) {
    let newHead = null
    let tmp = null
    while (head) {
        tmp = head.next
        head.next = newHead
        newHead = head
        head = tmp
    }
    return newHead
};

const p = reverseList(head)
console.log(p);