#include<iostream>
using namespace std;
int main()
{

    int a[50][50],i,j,k,n,m,s[1000],coun;
    cout<<"Enter row n & column m = ";
    cin>>n>>m;
    cout<<"Enter n*m element of matrices"<<endl;
    for(i=0; i<n; i++){
        for(j=0; j<m; j++){
        cin>>a[i][j];
        }
    }
    for(i=0; i<n; i++){
        for(k=(m*i), j=0; k<(i+1)*m, j<m; k++, j++){
            s[k]=a[i][j];
            //cout<<s[k]<<" ";
        }
    }
    cout<<"search row of matrices is = ";
    cin>>coun;
    for(i=n*(coun-1); i<coun*n; i++){
        cout<<s[i]<<endl;
    }
    return 0;
}


