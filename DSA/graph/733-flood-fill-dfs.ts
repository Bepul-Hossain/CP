function dfs(i, j, initialColor, image, R, C, newColor) {

    if (i < 0 || j < 0) return;
    if (i >= R || j >= C) return;
    if (image[i][j] !== initialColor) return;
    image[i][j] = newColor;;

    dfs(i - 1, j, initialColor, image, R, C, newColor);
    dfs(i + 1, j, initialColor, image, R, C, newColor);
    dfs(i, j - 1, initialColor, image, R, C, newColor);
    dfs(i, j + 1, initialColor, image, R, C, newColor);

    return image;
}

function floodFill1(image: number[][], sr: number, sc: number, color: number): number[][] {
    const initialColor = image[sr][sc];
    const newColor = color;
    const R = image.length;
    const C = image[0].length;

    if (initialColor === newColor) return image;
    return dfs(sr, sc, initialColor, image, R, C, newColor);
};
const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];

console.log(floodFill1(image, 1, 1, 2));