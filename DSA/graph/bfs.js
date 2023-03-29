// https://www.youtube.com/watch?v=2_Uuixtc5i0&ab_channel=AlvintheProgrammer

//using queue = FIFO
const bfsPrint_q = (graph, source) => {
    const queue = [source];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (const neighbor of graph[current]) {
            queue.push(neighbor);
        }

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
bfsPrint_q(graph, "a"); //abcdef