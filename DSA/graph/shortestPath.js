const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    const queue = [[nodeA, 0]];
    const visited = new Set([nodeA]);

    while (queue.length > 0) {

        const [node, distance] = queue.shift();

        if (node === nodeB) return distance;

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                queue.push([neighbor, distance + 1])
                visited.add(neighbor)
            }
        }
    }
    return -1;
};

const buildGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        let [a, b] = edge;
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph;
}
const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];
console.log(shortestPath(edges, 'w', 'z')); // -> 2