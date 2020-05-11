#include<bits/stdc++.h>
using namespace std;
int main(){

    int i,j,k,a[6][6],sum,mx=-10000000;

    for(i=0; i<6;i++){
        for(j=0; j<6; j++){
            cin>>a[i][j];
        }
    }

    for(i=0;i<4; i++){
        for(j=0; j<4; j++){

            sum=a[i][j]+a[i][j+1]+a[i][j+2]+a[i+1][j+1]+a[i+2][j]+a[i+2][j+1]+a[i+2][j+2];
            //cout<<sum<<" ";
            mx=max(mx,sum);

        }
    }
    cout<<mx<<endl;

    return 0;
}
