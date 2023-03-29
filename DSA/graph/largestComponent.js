const largestComponent = (graph) => {
    let largest = 0;
    const visited = new Set();
    for (const node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > largest) {
            largest = size
        }
    }

    return largest
}

const exploreSize = (graph, node, visited) => {
    if (visited.has(node)) return 0;
    visited.add(node);

    let size = 1;
    for (let neighbor of graph[node]) {
        size += exploreSize(graph, neighbor, visited);
    }
    return size;
}

const graph = {
    0: ['4', '7'],
    1: [],
    2: [],
    3: ['6'],
    4: ['0'],
    6: ['3'],
    7: ['0'],
    8: []
}
console.log(largestComponent(graph));// -> 4
