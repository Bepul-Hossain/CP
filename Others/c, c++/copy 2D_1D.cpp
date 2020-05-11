#include<iostream>
#include<bits/stdc++.h>

using namespace std;

int main(){
    int n,k=0,c=1;
    cout<<"Enter the order of matrix\n";
    cin>>n;
    int m=(n+1)*(n+1);
    int a[n+1][n+1],b[m];
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            cin>>a[i][j];
            b[k]=a[i][j];
            k++;
        }
        b[k]='*';
        k++;
    }
    int t;
    cout<<"Which Row do you want to see:\n";
    cin>>t;
    for(int i=0;i<m;i++){
        if(b[i]=='*'){
            c++;
            i++;
        }
        if(c==t){
            cout<<b[i]<<" ";
        }
    }
    return 0;

}
