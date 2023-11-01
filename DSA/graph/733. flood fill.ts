function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {

    if (image[sr][sc] === color) return image;

    const val: number = image[sr][sc];
    const R: number = image.length;
    const C: number = image[0].length;
    let queue: number[][] = [];

    queue.push([sr, sc]);
    let start = 0;
    const neighbours = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    while (start < queue.length) {

        const [row, col] = queue[start];
        start++;
        if (image[row][col] === color) continue;
        image[row][col] = color;

        for (let [i, j] of neighbours) {
            let newRow = row + i;
            let newCol = col + j;
            if (newRow >= 0 && newRow < R && newCol >= 0 && newCol < C && image[newRow][newCol] === val) {
                queue.push([newRow, newCol]);
            }
        }
    }

    return image;
};
const image2 = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];

console.log(floodFill(image2, 1, 1, 2));