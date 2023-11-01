function dfs(i, j, initialColor, image, R, C, newColor) {
    if (i < 0 || j < 0)
        return;
    if (i >= R || j >= C)
        return;
    if (image[i][j] !== initialColor)
        return;
    image[i][j] = newColor;
    ;
    dfs(i - 1, j, initialColor, image, R, C, newColor);
    dfs(i + 1, j, initialColor, image, R, C, newColor);
    dfs(i, j - 1, initialColor, image, R, C, newColor);
    dfs(i, j + 1, initialColor, image, R, C, newColor);
    return image;
}
function floodFill1(image, sr, sc, color) {
    var initialColor = image[sr][sc];
    var newColor = color;
    var R = image.length;
    var C = image[0].length;
    if (initialColor === newColor)
        return image;
    return dfs(sr, sc, initialColor, image, R, C, newColor);
}
;
var image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
console.log(floodFill1(image, 1, 1, 2));
