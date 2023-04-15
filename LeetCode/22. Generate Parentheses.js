var generateParenthesis = function (n) {
    return dfs(n, graph = [], open = 0, close = 0, str = "");
}

const dfs = (n, graph, open, close, str) => {

    if (open === n && close === n) return;

    if (close < open) {
        str = str.concat(")")
        close++;
        dfs(n, graph, open, close, str);
    }
    if (open < n) {
        str = str.concat("(");
        open++;
        dfs(n, graph, open, close, str);
    }
    graph.push(str)
    return graph
}

console.log(generateParenthesis(3));