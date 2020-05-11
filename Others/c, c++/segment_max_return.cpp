#include <bits/stdc++.h>
using namespace std;

#define inf -100000

int segmentArray[7], input[4]={0,1,-4,6};

void segTree( int low, int high, int pos ){
    if(low==high){
        segmentArray[pos]=input[low];
        return ;
    }
    int mid=(low+high)/2;
    segTree(low,mid, (2*pos)+1);
    segTree(mid+1,high, (2*pos)+2);
    segmentArray[pos]=min(segmentArray[2*pos+1], segmentArray[2*pos+2]);
}

int rang_minquery(int qlow, int qhigh, int low, int high ,int pos ){
    if(qlow<=low && qhigh>=high) return segmentArray[pos]; //total overlap
    if(qlow>high || qhigh<low) return 0; //no overlap
    int mid = (low+high)/2;

    return min(rang_minquery(qlow, qhigh, low, mid ,2*pos+1 ),
               rang_minquery(qlow, qhigh, mid+1, high,2*pos+2)
    );
}
int main() {

    int low=0, high=3,pos=0,output;

    segTree( low, high, pos);
    output = rang_minquery(  0, 3, low, high , pos );
    cout<<output<<" ";

    return 0;
}

