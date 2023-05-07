
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const arrToList = (arr) => {
    if (arr.length) {
        return new ListNode(arr[0], arrToList(arr.slice(1)));
    }
}
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    //L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 →
    // divide two link list
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let currentNode = slow.next;
    slow.next = null;

    //second half will reverse
    let prev = null;
    while (currentNode) {
        let tmp = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = tmp;
    }
    //join
    let h1 = head;
    let h2 = prev;
    while (h2) {
        let tmp = h1.next;
        h1.next = h2;
        h1 = h2;
        h2 = tmp;
    }
};
console.log(reorderList(arrToList([1, 2, 3, 5])));