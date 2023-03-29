const islandCount = (grid) => {
    let count = 0;
    const visited = new Set();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited) === true) {
                count++;
            }
        }
    }

    return count;
};

const explore = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid.length;
    if (!rowInbounds || !colInbounds) return false;

    if (grid[r][c] === 'W') return false;

    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited)
    explore(grid, r + 1, c, visited)
    explore(grid, r, c - 1, visited)
    explore(grid, r, c + 1, visited)

    return true
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid)); // -> 3