#include<bits/stdc++.h>
using namespace std;

int main()
{
    double l=1,n,t,i,h;
    printf("n\n");
    //freopen("input.txt","r",stdin);
    scanf("%lf",&n);
    h=n;
    for(i=0;i<=100;i++){
    t=(l+h)/2;
    if(n<=t*t){
        h=t;
    }
    else{
        l=t;
        }
    }
    //freopen("out.txt","w",stdout);
    printf("%lf\n",h);
    printf("%lf",l);


    return 0;
}
