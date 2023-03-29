// https://www.youtube.com/watch?v=2_Uuixtc5i0&ab_channel=AlvintheProgrammer

//using bsf
const hasPath_r = (graph, src, des) => {
    if (src === des) return true;
    for (let neighbor of graph[src]) {
        if (hasPath_r(graph, neighbor, des) === true) {
            return true;
        }
    }
    return false;
}

//using queue =FIFO
const hasPath_q = (graph, src, des) => {
    if (src === des) return true;
    const queue = [src];
    while (queue.length > 0) {
        const current = queue.shift();
        for (const neighbor of graph[current]) {
            if (neighbor === des) return true;
            queue.push(neighbor);
        }
    }
    return false;
}
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}
console.log(hasPath_r(graph, "a", "f"));
console.log("==========");
console.log(hasPath_q(graph, "a", "f"));