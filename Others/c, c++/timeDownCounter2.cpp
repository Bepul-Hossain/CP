#include <bits/stdc++.h>
using namespace std;

vector<int> addj[1000];
int cost[1000][1000];
int dist[1000];

int dijkstra(pair<int,int> src,int destination){

    if(src.second == destination) return 0;

    priority_queue< pair<int,int>, vector<pair<int,int> >, greater< pair<int,int> > > pq;

    pq.push(src);

    dist[1] = 0;

    while(!pq.empty()){
        pair<int,int> front = pq.top();
        pq.pop();
        int d = front.first;
        int t = front.second;

        for(int i=0;i<addj[t].size();i++){

            if(d + cost[t][addj[t][i]] < dist[addj[t][i]]){

                dist[addj[t][i]] = d + cost[t][addj[t][i]];

                pq.push(make_pair(dist[addj[t][i]],addj[t][i]));
                if(addj[t][i] == destination){
                    return dist[destination];
                }
            }
        }
    }
    return INT_MAX;
}

void edge(int n,int e){

    for(int i=0;i<e;i++){
        int x,y,c;
        cin>>x>>y>>c;
        addj[x].push_back(y);
        cost[x][y] = c;
    }
    for(int i=1;i<=n;i++){
        dist[i] = INT_MAX;
    }
}

int main(){

    freopen("input2.txt","r",stdin);

    int t;

    cin>>t;

    while(t--){

        int node,exitt,timeLimit,edges,count = 0;

        cin>>node>>exitt>>timeLimit>>edges;

        edge(node,edges);

        for(int i=1;i<=node;i++){

            int tmp = dijkstra(make_pair(0,i),exitt);

            if(tmp<=timeLimit){
                count++;
            }
            for(int i=1;i<=node;i++){

                dist[i] = INT_MAX;
            }
        }
        cout<<count<<endl;
    }
    return 0;
}
