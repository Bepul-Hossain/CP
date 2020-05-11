#include<bits/stdc++.h>
using namespace std;
vector<int>adj[20000];
bool vis[20000];
int n,u,v,parent[100]={0},level[20000]={0};

void bfs(int src , int dest){
    queue<int>q;
    q.push(src);
    vis[src]=true;
    level[src]=0;
    parent[src]=-1;

    while(!q.empty()){
        v=q.front();
        q.pop();
        for( int u : adj[v]){
            if(!vis[u]){
                vis[u]=true;
                q.push(u);
                level[u]=level[v]+1;
                parent[u]=v;
            }
        }
    }
    if(!vis[dest]){
    cout<<"No Path : "<<endl;
    }
    else{
    vector<int>path;
        for(int v=dest; v!=-1; v=parent[v]){
            path.push_back(v);
            //cout<<v<<" ok "<<endl;
        }
        reverse(path.begin(),path.end());
        cout<<"shortest path from src to dest is : ";
        for(int v : path){
           cout<<v<<"  ";

        }cout<<endl;
    }
}
int main(){

        memset(vis,0,sizeof(vis));

        for(int i=0; i<=20000; i++) adj[i].clear();
        cin>>n;
        for(int i=0; i<n; i++){
            cin>>u>>v;
            adj[u].push_back(v);
            adj[v].push_back(u);

        }

        int src,dest;
        cin>>src>>dest;

        bfs(src,dest);
        int l;
        cout<<"Enter an element of this graph which number that you want to know level l = ";
        cin>>l;
        cout<<"level = "<<level[l];
        //cout<<"Case "<<m<<": "<<sum<<endl;

    return 0;
}

