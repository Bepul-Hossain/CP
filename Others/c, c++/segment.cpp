#include <bits/stdc++.h>
using namespace std;

#define inf 1000
void segTree(int input[], int segtree[], int low, int high, int pos ){
    if(low==high){
        segtree[pos]=input[low]; return ;
    }
    int mid=(low+high)/2;
    segTree(input,segtree,low,mid, (2*pos)+1);
    segTree(input,segtree,mid+1,high, (2*pos)+2);
    segtree[pos]=min(segtree[2*pos+1], segtree[2*pos+2]);
}

int rang_minquery(int segtree[],int qlow, int qhigh, int low, int high ,int pos ){
    if(qlow<=low && qhigh>=high) return segtree[pos]; //total overlap
    if(qlow>high || qhigh<low) return inf; //no overlap
    int mid = (low+high)/2;

    return min(rang_minquery(segtree,qlow, qhigh, low, mid ,2*pos+1 ),
               rang_minquery(segtree,qlow, qhigh, mid+1, high,2*pos+2)
    );
}
int main() {

    int input[4]={-1,2,4,0}, segtree[7]={inf,inf,inf,inf,inf,inf,inf},low=0, high=3,pos=0,output;

    segTree(input, segtree, low, high, pos);

    output = rang_minquery( segtree, 3, 3, low, high , pos );
    cout<<output<<" ";

    return 0;
}
