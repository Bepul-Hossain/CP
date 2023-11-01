function dfs(vertex, adjList, visited, stack) {
    if (visited[vertex]) return;

    visited[vertex] = true;

    for (let child of adjList[vertex]) {
        dfs(child, adjList, visited, stack);
    }
    stack.push(vertex);
}


function main(V, adjList) {
    let visited = Array(V).fill(false);
    let stack = [];
    for (let i = 0; i < V; i++) {
        if (visited[i]) continue;
        dfs(i, adjList, visited, stack);
    }

    while (stack.length !== 0) {
        console.log(stack.pop());
    }
}


const adjList = {
    0: [],
    1: [],
    2: [3],
    3: [1],
    4: [0, 1],
    5: [2, 0]
}
// console.log(adjList);

main(6, adjList) //5 4 2 3 1 0