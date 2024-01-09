//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const arrToLinkList = (arr) => {
    if (arr.length > 0) {
        return new ListNode(arr[0], arrToLinkList(arr.slice(1)));
    }
}
// console.log(JSON.stringify(arrToLinkList([1, 2, 3, 4, 5])));
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (list, left, right) {
    let dummy = new ListNode(0, list);

    let head = dummy;
    let curr = 1;
    while (curr++ < left) {
        head = head.next;
    }
    let tail = head.next;

    while (left++ < right) {
        console.log(curr, left);
        const next = tail.next;
        tail.next = next.next;
        next.next = head.next;
        head.next = next;
    }
    return dummy.next;
};


console.log(reverseBetween(arrToLinkList([1, 2, 3, 4, 5]), 2, 4));
console.log(JSON.stringify(reverseBetween(arrToLinkList([1, 2, 3, 4, 5]), 2, 4)));