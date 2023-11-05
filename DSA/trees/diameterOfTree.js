function dfs(vertex, tree, longestPathFirstNode, count, visited) {

    for (let child of tree[vertex]) {
        if (visited[child]) continue;
        dfs(child, tree, longestPathFirstNode, count, visited);
    }

    longestPathFirstNode = vertex;
}


function findDiameter(tree) {
    let source = 1;
    let longestPathFirstNode = source;
    let visited = [];
    dfs(source, tree, longestPathFirstNode, 0, visited);
}


const tree = {
    1: [2, 3, 13],
    2: [5, 1],
    3: [4, 1],
    4: [9, 10, 3],
    5: [6, 7, 8, 2],
    6: [5],
    7: [5],
    8: [12, 5],
    9: [4],
    10: [11, 4],
    11: [10],
    12: [8],
    13: [1]
}
console.log(tree);
console.log(findDiameter(tree));