#include<bits/stdc++.h>
using namespace std;

#define pii pair<int, int>
#define SZ 100007
#define inf INT_MAX
vector<pii>adj[SZ];

int n, m;
int p[SZ];

int dijkstra(int src,int r)
{
    priority_queue<pii, vector<pii>, greater<pii> >q;
    vector<int>dist(n + 1, inf);

    q.push(pii(0, src));
    dist[src] = 0;
    p[src] = src;
    //cout<<p[src]<<endl;

    while(!q.empty())
    {
        int u = q.top().second;
        q.pop();
        //cout<<u<<endl;

        for(auto x : adj[u])
        {
            int v = x.first;
            int wt = x.second;

            if(dist[v] > dist[u] + wt)
            {
                dist[v] = dist[u] + wt;
                q.push(pii(dist[v], v));
                p[v] = u;
                //if(p[v]==r) return p[v];
                //cout<<dist[v]<<" "<<v<<" "<<p[v]<<endl;
            }
            //cout<<dist[v]<<endl;
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
    int s,r;
    cin>>s>>r;
   // p[n] = r;
    dijkstra(s,r);
    //if(p[n] != r)
        prnt(r);
    //else
       // printf("-1\n");
    return 0;
}
