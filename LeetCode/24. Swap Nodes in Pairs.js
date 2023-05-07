
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
var swapPairs = function (head) {
    console.log(head);
    if (!head || !head.next) {
        return head;
    }
    let currentNode = head.next;
    head.next = swapPairs(currentNode.next);
    currentNode.next = head;
    return currentNode;
};

console.log(swapPairs(arrToList([1, 2])));