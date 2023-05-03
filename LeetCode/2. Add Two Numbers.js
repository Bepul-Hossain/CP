
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let arrToList = (arr) => {
    if (arr.length > 0) {
        return new ListNode(arr[0], arrToList(arr.slice(1)))
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let rec = (n1, n2, carry = 0) => {
        if (!n1 && !n2 && !carry) return null;
        let newValue = (n1?.val || 0) + (n2?.val || 0) + carry;
        carry = Math.floor(newValue / 10);
        return new ListNode(newValue % 10, rec(n1.next, n2.next, carry))
    }

    return rec(l1, l2);
};
console.log(addTwoNumbers(arrToList([2, 4, 3]), arrToList([5, 6, 4])));