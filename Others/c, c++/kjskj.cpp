#include<iostream>
using namespace std;
int main()
{
    int n,i,j,t,sum=0;
    cin>>t;
    for(j=1;j<=t;j++){
        cin>>n;
        for(i=1;i<=n;i++){
            if(n%2==1){
                sum=sum+1;
            }

            i=i-1;
        }
        cout<<sum;
    }
    return 0;
}
