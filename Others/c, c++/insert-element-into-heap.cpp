#include<iostream>
using namespace std;
void insertHeap(int tree[],int n,int item){
    int ptr,par;
    n=n+1;
    ptr=n;
    while(ptr>1){
        par=ptr/2;
        if(item<=tree[par]){
            tree[ptr]=item;
            return;
        }
        tree[ptr]=tree[par];
        ptr=par;
    }
    tree[1]=item;
    return;
}
int main(){
    int tree[100],n,item,i,j;
    cin>>n;
    for(i=1;i<=n;i++)
        cin>>tree[i];
    cout<<"Enter item:\n";
    cin>>item;
    insertHeap(tree,n,item);
    for(i=1;i<=n+1;i++){
        cout<<tree[i]<<" ";
    }
    cout<<endl;
    return 0;
}
