#include<iostream>
using namespace std;
void ins_heap(int n, int tree[],int item){
    int par,ptr;
    n=n+1;
    ptr=n;
    while(ptr>1){
            par=ptr/2;
        if(tree[par]>=item){
                tree[ptr]=item;
           // cout<<tree[ptr];
            return;
        }
        else{
            tree[ptr]=tree[par];
            ptr=par;

        }
    }
    tree[1]=item;
    //cout<<"dfd  "<<tree[ptr];
    return;

}
int main()
{
    int i,tree[100],c,n;
    cin>>n;
    for(i=1; i<=n; i++){
        cin>>c;
        tree[i]=c;
    }
    int item;
    cout<<"inter item ";
    cin>>item;
    ins_heap(n,tree,item);
    for(i=1; i<=n+1; i++){
        cout<<tree[i]<<" ";
    }
    return 0;
}
/*
20
97 88 95 66 55 95 48 66 35 48 55 62 77 25 38 18 40 30 26 24
*/
