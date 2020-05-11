#include<bits/stdc++.h>
using namespace std;
vector<int>adj[20000],p;
bool used[20000];
int n,u,v,d[20000],big,zero,one,sum,f;

void bfs(int s , int dest)
{
    queue<int>q;
    q.push(s);
    used[s]=true;
    d[s]=0;
    p[s]=-1;
    int big;
        zero=1, one=0;
    while(!q.empty()){
        v=q.front();
        q.pop();
        for( int j=0;j<adj[v].size();j++){
            f=adj[v][j];
            if(!used[f]){
                used[f]=true;
                q.push(f);
                d[f]=d[v]+1;
                p[f]=v;

            }
        }
    }
    if(!used[dest]){
    cout<<"No Path : "<<endl;
    }
else{
    vector<int>path;
    for(int v=u; v!=-1; v=p[dest]){
        path.push_back(v);
        reverse(path.begin(),path.end());
        cout<<"path : ";
        for(int v : path){
           cout<<v<<"  ";

        }
    }
}
}


int main(){

        memset(used,0,sizeof(used));
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

        //cout<<"Case "<<m<<": "<<sum<<endl;

    return 0;
}

