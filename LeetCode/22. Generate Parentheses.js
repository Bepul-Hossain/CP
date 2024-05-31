var generateParenthesis = function (n) {
    let graph = [];
    let open = 0, close = 0;
    function dfs(n, graph, open, close, str) {
        if (open === n && close === n) {
            graph.push(str)
            return;
        };

        if (open < n) {
            dfs(n, graph, open + 1, close, str + "(");
        }

        if (close < open) {
            dfs(n, graph, open, close + 1, str + ")");
        }
    }
    dfs(n, graph, open, close, "");
    return graph;
}

console.log(generateParenthesis(3));