#include<iostream>
using namespace std;
void insertelementheap(int tree[],int n,int item){
    int ptr,par;
    n=n+1;
    ptr=n;
    while(ptr>1){
        par=n/2;
        if(tree[par]>=item){
            tree[ptr]=item;
            return;
        }
            ptr=par;
    }
    tree[1]=item;
    return;

}

int main()
{
    int n,tree[100],i;
    cout<<"enter number of element n = ";
    cin>>n;
    for(i=1; i<=n; i++){
        cin>>tree[i];
    }
    int item;
    cout<<"enter search item = ";
    cin>>item;
    insertelementheap(tree,n,item);
    cout<<"output after insert \n";
    for(i=1; i<=n+1; i++){
        cout<<tree[i]<<"  ";
    }

    return 0;
}
