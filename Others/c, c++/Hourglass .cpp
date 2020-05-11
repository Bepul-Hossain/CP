#include<bits/stdc++.h>
using namespace std;
int main(){
    int i,j,mx=0,sum,a[7][7],l,k,c;
    for(i=1;i<=6;i++){
        for(j=1;j<=6;j++){
            cin>>a[i][j];
        }
    }
    l=1;sum=0;
    for(i=1;i<=4;i++){
        for(c=1;c<=4;c++){
            l=1;
            sum=0;
            for(j=c;j<=c+2;j++){
                for(k=l;k<=l+2;k++){
                   if(j==c+1){
                        if(k!=l&&k!=l+2)
                            sum+=a[j][k];
                   }
                   else
                        sum+=a[j][k];
                        cout<<"a="<<a[j][k]<<" ";
                }
                //cout<<"s= "<<sum<<" ";
                l++;
            }
            //cout<<sum<<endl;
            mx=max(mx,sum);

        }


    }
    cout<<mx<<endl;

return 0;
}
