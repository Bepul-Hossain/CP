class Solution {
    // Function to return Breadth First Traversal of given graph.

    bfsOfGraph(V, adj) {
        // code here
        let ans = [];
        let source = 0;
        let vis = Array(V).fill(false);
        let queue = [];

        queue.push(source);

        while (queue.length > 0) {
            let current = queue.shift();
            if (vis[current]) continue;
            vis[current] = true;
            ans.push(current);

            for (let child of adj[current]) {
                if (!vis[child]) {
                    queue.push(child);
                }
            }
        }

        return ans;
    }
}

const obj = new Solution();
console.log(obj.bfsOfGraph(10, [
    [1, 2, 4, 8],
    [5, 6, 9],
    [4],
    [7, 8],
    [],
    [8],
    [7, 9],
    [],
    [],
    [],
    [],]));
