#include<bits/stdc++.h>
using namespace std;

#define pii pair<int, int>
#define SZ 100007
#define inf INT_MAX
vector<pii>adj[SZ];

int n, m;
int p[SZ];

void dijkstra(int src)
{
    priority_queue<pii, vector<pii>, greater<pii> >q;
    vector<int>dist(n + 1, inf);

    q.push(pii(0, src));
    dist[src] = 0;
    p[src] = src;

    while(!q.empty())
    {
        int u = q.top().second;
        q.pop();

        for(auto x : adj[u])
        {
            int v = x.first;
            int wt = x.second;

            if(dist[v] > dist[u] + wt)
            {
                dist[v] = dist[u] + wt;
                q.push(pii(dist[v], v));
                p[v] = u;
            }
        }
    }
}

void prnt(int n){
    if(p[n] == n){
        cout<< n<< " ";
        return;
    }

    prnt(p[n]);
    cout<< n << " ";
}

int main()
{
    scanf("%d %d", &n, &m);
    for(int i = 0; i < m; i++)
    {
        int u, v, w;
        scanf("%d %d %d", &u, &v, &w);
        adj[u].push_back(pii(v, w));
        adj[v].push_back(pii(u, w));
    }
    p[n] = -1;
    dijkstra(1);
    if(p[n] != -1)
        prnt(n);
    else
        printf("-1\n");
    return 0;
}
/*
5 7
1 2 2
1 4 5
1 3 20
2 4 5
2 5 10
3 5 5
4 5 2
*/
