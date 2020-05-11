#include <iostream>
using namespace std;

void heap_delete(int tree[],int pos,int n){
    int last,l,r,ptr;
    last=tree[n];
    ptr=pos;
    l=pos*2;
    r=l+1;
    while(r<=n){
        if(last>=tree[r] && last>=tree[l]){
            tree[pos]=last;
            return;
        }
        else if(tree[r]<=tree[l]){
            tree[ptr]=tree[l];
            ptr=l;
        }
        else{
            tree[ptr]=tree[r];
            ptr=r;
        }
        l=2*ptr;
        r=l+1;
    }
    tree[ptr]=last;
}
int main()
{
    int i, tree[100],n,pos,c;
    cout<<"enter n = ";
    cin>>n;
    for(i=1; i<=n; i++){
        cin>>c;
        tree[i]=c;
    }
    cout<<"delete position is ";
    cin>>pos;
    heap_delete(tree,pos,n);
    for(i=1; i<=n-1; i++){
        cout<<tree[i]<<" ";
    }

    return 0;
}
