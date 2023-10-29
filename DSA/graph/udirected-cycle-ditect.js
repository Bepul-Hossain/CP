class Solution {
    // Function to detect cycle in an undirected graph.
    isCycleUtil(u, par, adj, visited) {
        visited[u] = true;
        for (let child of adj[u]) {
            if (par == child) continue;
            if (visited[child]) return true;
            if (this.isCycleUtil(child, u, adj, visited)) return true

        }
        return false;
    }

    isCycle(V, adj) {
        // code here
        let visited = new Array(V);
        visited.fill(false);

        for (let i = 0; i < V; i++) {

            if (!visited[i] && this.isCycleUtil(i, -1, adj, visited)) return true;

        }

        return false;
    }
}

const obj = new Solution();

// console.log(obj.isCycle(5, [[1], [0, 2, 4], [1, 0, 3], [2, 4], [1, 3]])); //cycle
console.log(obj.isCycle(4, [[], [2], [1, 3], [2]])); //no-cycle
