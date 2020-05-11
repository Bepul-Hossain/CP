#include <bits/stdc++.h>
using namespace std;
vector< vector<int> > adj;
vector <bool> visited;

void dfs(int v) {
    for(int u : adj[v]) {
        if(!visited[u]) {
            visited[u] = true;
            dfs(u);
        }
    }
}
int main() {
    //freopen("in.txt", "rt", stdin);
    ios::sync_with_stdio(false);
	cin.tie(NULL);

	int n, a, b;
	while(cin >> n && n) {
        adj.assign(n + 1, vector <int>() );

		while(cin >> a && a) {
            while(cin >> b && b) {
                adj[a].push_back(b);
            }
		}

        int query, src;
        cin >> query;

        for(int i = 1; i <= query; i++) {
            cin >> src;

            visited.assign(n + 1, false);

            dfs(src);

            vector <int> ans;

            for(int i = 1; i <= n; i++) {
                if(!visited[i]) {
                    ans.push_back(i);
                }
            }
            cout << ans.size();
            for(int u : ans) {
                cout << " " << u;
            }cout << endl;
        }
	}
    return 0;
}
