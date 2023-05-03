function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const listFromArray = a => a.length ? new ListNode(a[0], listFromArray(a.slice(1)))
    : null;
const arrayFromList = head => head ? [head.val].concat(arrayFromList(head.next))
    : [];



var mergeTwoLists = function (l1, l2) {
    console.log(l2);
    var mergedHead = { val: -1, next: null },
        crt = mergedHead;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;
    return mergedHead.next;
};

const result = arrayFromList(
    mergeTwoLists(listFromArray([1, 2, 4]), listFromArray([1, 3, 4]))
);

console.log(result);