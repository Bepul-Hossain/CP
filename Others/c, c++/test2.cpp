#include <bits/stdc++.h>
using namespace std;
#define pii pair<int,int>

int main() {

    vector<pii>vc;
    pii p;
    priority_queue<pii,vector<pii>,greater<pii>>pq;
    vc.push_back(make_pair(5,6));
    vc.push_back(make_pair(8,2));
    pq.push(vc[0]);
    pq.push(vc[1]);
    p=pq.top();


    cout<<p.first<<" "<<p.second<<endl;
   // cout<<vc[0].second;

    return 0;
}
