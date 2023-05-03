
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
 * @return {number}
 */
var getDecimalValue = function (head) {
    let str = "";
    while (head !== null) {
        str = str.concat(head.val);
        head = head.next;
    }
    return parseInt(str, 2);
};

console.log(getDecimalValue(arrToList([1, 0, 1, 0])));