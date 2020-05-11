#include<iostream>
using namespace std;
int main()
{
    int a[10][10], b[10][10],addition[10][10],subtraction[10][10],multiplication[10][10],i,p,q,j,m,n;
    cout<<"m*n matrix = ";
    cin>>m>>n;
    cout<<endl<<"p*q matrix = ";
    cin>>p>>q;
    if(m==p && n==q){
            cout<<"Matrices A is"<<endl;
            for(i=0; i<m; i++){
                for(j=0; j<n; j++){
                    cin>>a[i][j];
                    //cout<<a[i][j]<<" p" <<endl;
                }

            }
            cout<<endl<<"Matrices B is"<<endl;
            for(i=0; i<m; i++){
                for(j=0; j<n; j++){
                    cin>>b[i][j];
                    //cout<<b[i][j]<<endl;
                    addition[i][j]=a[i][j]+b[i][j];
                    subtraction[i][j]=a[i][j]-b[i][j];
                    multiplication[i][j]=a[i][j]*b[i][j];
                }
            }
            cout<<"Addition of matrices A+B = "<<endl;
            for(i=0; i<m; i++){
                for(j=0; j<n; j++){
                    cout<<addition[i][j]<<"  ";
                }
                cout<<endl;
            }
            cout<<"Subtraction of matrices A-B = "<<endl;
            for(i=0; i<m; i++){
                for(j=0; j<n; j++){
                    cout<<subtraction[i][j]<<"  ";
                }
                cout<<endl;
            }
            cout<<"Multiplication of matrices A*B = "<<endl;
            for(i=0; i<m; i++){
                for(j=0; j<n; j++){
                    cout<<multiplication[i][j]<<"  ";
                }
                cout<<endl;
            }
    }
    else if(n==p){
        cout<<"Addition and subtraction impossible"<<endl;
        cout<<"Matrices A is"<<endl;
            for(i=0; i<m; i++){
                for(j=0; j<n; j++){
                    cin>>a[i][j];
                }
            }
            cout<<endl<<"Matrices B is"<<endl;
            for(i=0; i<p; i++){
                for(j=0; j<q; j++){
                    cin>>b[i][j];
                }
            }
            for (i = 0; i < m; i++) {
                for (j = 0; j < p; j++) {
                int sum = 0;
                   for (int k = 0; k < n; k++) {
                   sum = sum + a[i][k] * b[k][j];
                    }
                   multiplication[i][j] = sum;
                 }
            }
            for(i=0; i<m; i++){
                for(j=0; j<q; j++){
                    cout<<multiplication[i][j]<<endl;
                }
                cout<<endl;
            }
    }
    return 0;
}
