function dfs(vertex, graph, visited, recStack) {
    //take action after entering the vertext
    if (recStack[vertex]) return true;
    else if (visited[vertex]) return false;

    recStack[vertex] = true;
    visited[vertex] = true;

    for (let child of graph[vertex]) {
        //take action befor enterting the child node
        if (dfs(child, graph, visited, recStack)) {
            return true;
        }
        //take action after exiting the child node 
    }
    //take action after exiting the vertext
    recStack[vertex] = false;
    return false;
}

var canFinish = function (numCourses, prerequisites) {
    //create graph
    const graph = {};
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (let [firseCourse, secondCouse] of prerequisites) {
        graph[firseCourse].push(secondCouse);
    }
    // console.log(graph);
    //call dfs
    const visited = Array(numCourses).fill(false);
    const recStack = Array(numCourses).fill(false);

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i] && dfs(i, graph, visited, recStack)) {
            return false;
        }
    }
    return true;
};

console.log(canFinish(2, [[1, 0]]));

