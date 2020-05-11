#include<bits/stdc++.h>
using namespace std;
vector<long long int>adj[2000006];
map<long long int,long long int>mp;
long long int ct=0;
void iddfs(int src,int limit){
    if(limit<=0)
        return;
    int i;
    for(i=0;i<adj[src].size();i++){
        int j=adj[src][i];
        if(!mp[j]||mp[j]>mp[src]+1){
                if(!mp[j])
                    ct++;
            mp[j]=mp[src]+1;
            iddfs(j,limit-1);
        }
    }

}
int main(){
    long long int n,u,v,i,j,source,limit,tc=1;
    /*freopen("test1.txt","r",stdin);
    freopen("out1.txt","w",stdout);*/
    set<long long int>st;
    set<long long int>::iterator it;
    while(1){
        scanf("%lld",&n);
        if(n==0) break;
        j=0;
        for(i=0;i<2000006;i++)
            adj[i].clear();
        st.clear();
        for(i=1;i<=n;i++){
            scanf("%lld%lld",&u,&v);
            adj[u].push_back(v);
            adj[v].push_back(u);
            st.insert(u);
            st.insert(v);
        }
        while(1){
            scanf("%lld%lld",&source,&limit);
            if(source==0&&limit==0)
                break;
            ct=0;
            if(!adj[source].empty())
            ct=1;
            mp.clear();
            mp[source]=1;
            iddfs(source,limit);
            ct=st.size()-ct;
            printf("Case %lld: %lld nodes not reachable from node %lld with TTL = %lld.\n",tc++,ct,source,limit);

        }
    }
    return 0;
}

