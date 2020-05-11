
#include<iostream>
using namespace std;
int main()
{
    int t,b,n,i,k,coutn,cou,q,j=1,p;
    cin>>t;
    for(i=1; i<=t; i++){
        cin>>n;
        coutn=0;
        p=n;
            for(j=1;j<=p;){
                if(p%2==1){
                    coutn=coutn+1;
                    p=p/2;

                }else{
                    p=p/2;

                    }
            }cout<<"count = "<<coutn<<endl;
    }
    return 0;
}
