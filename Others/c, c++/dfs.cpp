#include<bits/stdc++.h>
using namespace std;
vector<int>adj[100];
int u,v;

bool vis[200];

void dfs(int src){
    stack<int>stk;
    stk.push(src);
    while(!stk.empty()){
        vis[src]=true;
        for(u : adj[src]){
            if(!vis[u]){
              dfs(u);
            }
        }
        cout<<stk.top()<<" ";
                stk.pop();
    }
}

int main(){
    memset(vis,false,sizeof(vis));
    //cout<<"kk"<<vis[10];
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        cin>>u>>v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    int src;
    cin>>src;
    cout<<"path : ";
    dfs(src);

    return 0;
}
