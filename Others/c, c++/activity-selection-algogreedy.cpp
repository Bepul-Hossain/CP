#include<bits/stdc++.h>
using namespace std;
typedef vector<int> vi;
typedef pair<int,int> pii;
typedef vector< pii > vii;
typedef priority_queue<pii, vector<pii>, greater<pii> > pq;
typedef vector<pq>vi2 ;
priority_queue<pii, vector<pii>, greater<pii> >q;
int main(){
    int s,f,i,j,n;
    vi2 vc;
    cin>>n;
    for(i=1;i<=n;i++){
        cin>>s>>f;
        q.push({f,s});
        //vc.push_back(q);
    }
    f=q.top().first;
    cout<<q.top().second<<" "<<q.top().first<<endl;
    q.pop();
    for (j = 1; j <n; j++)
    {
      // If this activity has start time greater than or
      // equal to the finish time of previously selected
      // activity, then select it
      s=q.top().second;
      if (s>=f)
      {
          //printf ("%d  %d \n", s,f);
          cout<<q.top().second<<" "<<q.top().first<<endl;
          f =q.top().first;
      }
      q.pop();
    }

    return 0;
}
