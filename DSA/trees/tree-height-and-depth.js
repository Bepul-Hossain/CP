// Finding height and depth in a tree. 

function dfs(source, tree, ans, height, depth) {
    ans.push(source);
    if (tree[source] && tree[source].length > 0) {
        for (let child of Object.values(tree[source])) {

            depth[child] = depth[source] + 1;
            dfs(child, tree, ans, height, depth);
            height[source] = Math.max(height[source], height[child] + 1);

        }
    }
    return ans;
}

function findDeptHeight(source, tree, ans, height, depth) {

    return dfs(source, tree, ans, height, depth);
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
const height = Array(14).fill(0);
const depth = Array(14).fill(0);

// console.log(tree);
console.log(findDeptHeight(1, tree, [], height, depth));
depth.shift(); // Node From 1 to 13, There is no 0 node
console.log("depth = ", depth);
console.log(height[1]);
height.shift(); // Node From 1 to 13, There is no 0 node
console.log("height = ", height);