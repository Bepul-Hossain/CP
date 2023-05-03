
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const arrToList = (arr) => {
    if (arr.length > 0) {
        return new ListNode(arr[0], arrToList(arr.slice(1)));
    }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let current = head;
    let size = 0;
    while (head !== null) {
        size++;
        head = head.next;
    }
    let mid = Math.ceil((size + 1) / 2);
    let len = 0;
    while (current !== null) {
        len++;
        if (len === mid) {
            return current
        }
        current = current.next;
    }
};
console.log(middleNode(arrToList([1, 2, 3, 4, 5, 6])));