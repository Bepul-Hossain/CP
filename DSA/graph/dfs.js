// https://www.youtube.com/watch?v=2_Uuixtc5i0&ab_channel=AlvintheProgrammer

//using stack
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

//using recursion
const dfsPrint_r = (graph, source) => {
    if (source.length <= 0) return
    console.log(source);
    for (let neighbor of graph[source]) {
        dfsPrint_r(graph, neighbor)
    }
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
dfsPrint_r(graph, "a"); //abdfce