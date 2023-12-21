let list =
{
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

let dummyList = {
    next: list
};

let head = dummyList;
let left = 2;

for (let i = 1; i < left; i++) {
    head = head.next;
}

// console.log(JSON.stringify(head));
let right = 4;
let curr = head.next;
// console.log(curr);
let next = null;
let prev = null;

for (let i = left; i < right; i++) {

    next = curr.next;
    curr.next = next.next;
    next.next = head.next;
    head.next = next;
}


console.log(JSON.stringify(dummyList.next));
// console.log(JSON.stringify(prev));
// console.log(JSON.stringify(list));
