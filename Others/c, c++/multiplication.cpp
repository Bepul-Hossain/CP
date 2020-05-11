#include<bits/stdc++.h>
using namespace std;
int main()
{
        int m,n,p,q,i,j,a[20][20],b[20][20],multiplication[20][20];
        //freopen("txt.txt","r",stdin);
        cout<<"enter size of A matrices m*n = ";
        cin>>m>>n;
        cout<<"enter size of B matrices p*q = ";
        cin>>p>>q;
        if(n==p){
        //cout<<"Addition and subtraction impossible"<<endl;
        cout<<"Matrices A is"<<endl;
            for(i=1; i<=m; i++){
                for(j=1; j<=n; j++){
                    cin>>a[i][j];
                }
            }
            cout<<endl<<"Matrices B is"<<endl;
            for(i=1; i<=p; i++){
                for(j=1; j<=q; j++){
                    cin>>b[i][j];
                }
            }
            for (i = 1; i <= m; i++) {
                for (j = 1; j <= q; j++) {
                int sum = 0;
                   for (int k = 1; k <= n; k++) {
                   sum = sum + a[i][k] * b[k][j];
                    }
                   multiplication[i][j] = sum;
                 }
            }
            cout<<endl<<"Multiplication is "<<endl;
            for(i=1; i<=m; i++){
                for(j=1; j<=q; j++){
                    cout<<endl<<multiplication[i][j]<<" ";
                }
               cout<<endl;
            }
        }
    return 0;
}
