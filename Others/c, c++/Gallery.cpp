#include<bits/stdc++.h>
#define SIZE 55
using namespace std;

struct point{
    int x, y;
};

point p0, pnts[SIZE],stackp[SIZE];

int n,top;

int orientation(point p, point q, point r){

    int val=(q.y-p.y)*(r.x-q.x)-(q.x-p.x)*(r.y-q.y);
    if(val==0){

        return 0;  //colinear
    }
    return (val>0)? 1:2; //Clock or counterclock
}
int distSq(point p1, point p2)
    {
        return (p1.x - p2.x)*(p1.x - p2.x) +
            (p1.y - p2.y)*(p1.y - p2.y);
    }

bool cmp(point p1,point p2){

        int ore=orientation(p0,p1,p2);

        if(ore==0)return distSq(p0,p1)<distSq(p0,p2);

        if(ore==2)return true;

        else return false;
    }

int main(){
    freopen("input.txt","r",stdin);
    int i,j,a,b,ts,cn=0;
    while(true){

        cin>>n;
        if(n==0){
            break;
        }
        for(i=0;i<n;i++){
            cin>>pnts[i].x>>pnts[i].y;
        }
        p0=pnts[0];
        sort(pnts+1,pnts+n,cmp);
        pnts[n]=pnts[0];

        i=1;

        while(i<n && orientation(pnts[i-1],pnts[i],pnts[i+1])==2){
            i++;
        }

        if(i==n){
            cout<<"No"<<endl;
        }
        else{
            cout<<"Yes"<<endl;
        }
    }

}
