

var mergeTwoLists = function (list1, list2) {
    let mergedList = null;
    let currentNode1 = list1
    let currentNode2 = list2
    if (currentNode1 === null && currentNode2 === null) return mergedList;
    if (currentNode1 === null) return currentNode2;
    if (currentNode2 === null) return currentNode1;

    mergeFunc(currentNode1, currentNode2)


    return mergedList;
};

function mergeFunc(currentNode1, currentNode2) {
    if (currentNode1.val > currentNode2.val) {
        mergedList.val = currentNode2.val;
        currentNode2 = currentNode2.next;
        mergeFunc(currentNode1, currentNode2);
    }
    else {
        mergedList.val = currentNode1.val;
    }
}