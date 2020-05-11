#include<bits/stdc++.h>
using namespace std;
void deleteHeap(int tree[],int n,int pos){
    int last,left,right,ptr,par,item;
    last=tree[n];
    item=tree[pos];
    //n--;
    left=pos*2;
    right=left+1;
    ptr=pos;
    while(right<=n){
        if(last>=tree[left]&&last>=tree[right]){
            tree[ptr]=last;
            return;
        }
        if(tree[right]<=tree[left]){
            tree[ptr]=tree[left];
            ptr=left;
            //cout<<"ok2";
        }
        else{
            tree[ptr]=tree[right];
            ptr=right;
            //cout<<"ok"<<endl;
        }
        left=2*ptr;
        right=left+1;
    }
   //if(left==n&&last<tree[left])
        tree[ptr]=last;
}
int main(){
    int tree[100],n,item,i,j,pos;
    cin>>n;
    for(i=1;i<=n;i++)
        cin>>tree[i];
    cout<<"Enter position:\n";
    cin>>pos;
    deleteHeap(tree,n,pos);
    for(i=1;i<n;i++){
        cout<<tree[i]<<" ";
    }
    cout<<endl;
    return 0;
}
/*
20
97 88 95 66 55 95 48 66 35 48 55 62 77 25 38 18 40 30 26 24
*/
