#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,p,i,m,a,b,j,q,t;
    double s,r1,r2;
    cin>>t;
    for(j=1; j<=t; j++){
        cin>>a>>b>>n>>m;
        if(n>1){
        //r=fibonacci series er addition;
        r1=(pow(((1+sqrt(5)))/2,n)+pow(((1-sqrt(5)))/2,n))/sqrt(5);
        r2=(pow(((1+sqrt(5)))/2,n-1)+pow(((1-sqrt(5)))/2,n-1))/sqrt(5);
        //printf("%.12lf",r);
        s=(r2*b)+(r1*a);
        }
        else{
        s=a;
        }
        if(ceil(s)-s>0.5){
           q= floor(s);
        }
        else{
            q=ceil(s);
        }
        p=1;
        for(i=1; i<=m; i++){
            p=p*10;
        }
        cout<<"Case "<<j<<": "<<q%p<<endl;
    }
}
