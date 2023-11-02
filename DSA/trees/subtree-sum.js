// Finding subTreeSum and depth in a tree. 

function dfs(source, tree, ans, subTreeSum, depth) {
    ans.push(source);
    subTreeSum[source] = source;
    if (tree[source] && tree[source].length > 0) {
        for (let child of Object.values(tree[source])) {
            dfs(child, tree, ans, subTreeSum, depth);
            subTreeSum[source] = subTreeSum[source] + subTreeSum[child];
        }
    }
    return ans;
}

function findSubTreeSum(source, tree, ans, subTreeSum, depth) {

    return dfs(source, tree, ans, subTreeSum, depth);
}

const tree = {
    1: [2, 3, 13],
    2: [5],
    3: [4],
    5: [6, 7, 8],
    8: [12],
    4: [9, 10],
    10: [11]
}
const subTreeSum = Array(14).fill(0);
const depth = Array(14).fill(0);

// console.log(tree);
console.log(findSubTreeSum(1, tree, [], subTreeSum, depth));
depth.shift(); // Node From 1 to 13, There is no 0 node
console.log("depth = ", depth);
subTreeSum.shift(); // Node From 1 to 13, There is no 0 node
console.log("subTreeSum = ", subTreeSum);