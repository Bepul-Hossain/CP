// https://www.youtube.com/watch?v=2_Uuixtc5i0&ab_channel=AlvintheProgrammer

//using stack root->right->left
const dfsPrint_s = (graph, source) => {
    const stack = [source];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        graph[current];

        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

//using recursion=> root->left->right
function dfsPrint_r(graph, source, ans) {
    ans.push(source);
    for (let neighbor of graph[source]) {
        dfsPrint_r(graph, neighbor, ans)
    }
    return ans;
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

dfsPrint_s(graph, "a"); //acebdf
console.log("============");
console.log(dfsPrint_r(graph, "a", [])) //abdfce