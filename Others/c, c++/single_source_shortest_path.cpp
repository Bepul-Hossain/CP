#include <bits/stdc++.h>
using namespace std;

#define pii pair<int, int>
#define SZ 10007
#define inf INT_MAX

int n;

vector <pii>adj[SZ];
void ini()
{
    for(int i = 0; i < SZ; i++) adj[i].clear();
}
int dijkstra(int src, int dst)
{
    priority_queue<pii, vector<pii>, greater<pii> >q;
    vector<int>dist(n + 1, inf);



    q.push(pii(0, src));
    dist[src] = 0;

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
            }
        }
    }
    return dist[dst];
}

int main()
{
    int s;
    scanf("%d", &s);
    while(s--)
    {
        ini();
        map<string, int>mp;
        scanf("%d", &n);
        for(int i = 1; i <= n; i++)
        {
            char city[11];
            scanf("%s", city);
            mp[city] = i;
            int p;
            scanf("%d", &p);
            for(int j = 0; j < p; j++)
            {
                int nr, cost;
                scanf("%d %d", &nr, &cost);
                adj[i].push_back(pii(nr, cost));
                adj[nr].push_back(pii(i, cost));
            }
        }
        int r;
        scanf("%d", &r);
        while(r--)
        {
            char s[11], d[11];
            scanf("%s %s", s, d);
            int cost = dijkstra(mp[s], mp[d]);
            printf("%d\n", cost);
        }
    }
    return 0;
}
