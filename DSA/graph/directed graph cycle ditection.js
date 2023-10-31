const graph = {
    1: [2, 3, 5],
    2: [4],
    3: [4],
    4: [8],
    8: [],
    5: [6],
    6: [7],
    7: [5]
}

const dfs = (graph, vertex, visited, recStack) => {
    //take action after entering the vertext
    if (recStack[vertex]) {
        return true;
    }
    if (visited[vertex]) {
        return false;
    }

    visited[vertex] = true;
    recStack[vertex] = true;
    console.log(vertex);
    for (let child of graph[vertex]) {
        //take action befor entring the child node
        if (dfs(graph, child, visited, recStack)) {
            return true;
        }
        //take action after exiting the child node
    }
    recStack[vertex] = false;
    //take action after exiting the vertex
    return false
}

function isCycle(V, graph) {
    let visited = Array(V + 1).fill(false);
    let recStack = Array(V + 1).fill(false);

    return dfs(graph, 1, visited, recStack);
}

console.log(isCycle(8, graph));