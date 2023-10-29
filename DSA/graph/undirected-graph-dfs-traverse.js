class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    dfs(source, adj, vis, ans) {

        vis[source] = true;
        ans.push(source);
        for (let child of adj[source]) {
            if (!vis[child]) {
                this.dfs(child, adj, vis, ans);
            }
        }
        return ans;
    }

    dfsOfGraph(V, adj) {
        let vis = Array(V).fill(false);
        let ans = [];
        this.dfs(0, adj, vis, ans);

        return ans;
    }
}

let obj = new Solution();

console.log(obj.dfsOfGraph(4, [[1, 3], [2, 0], [1], [0]]
));