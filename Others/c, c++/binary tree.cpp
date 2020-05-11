#include<bits/stdc++.h>
using namespace std;
double distance(double a[]){
    double midax, miday, midbx, midby, p;
        midax=(a[0]+a[2])/2.0;
        miday=(a[1]+a[3])/2.0;
        midbx=(a[4]+a[6])/2.0;
        midby=(a[5]+a[7]/2.0);
        p=sqrt(45);
        return 4;

}
int main()
{
    int i,t;
    cin>>t;
    for(i=1; i<=t; i++){
        double a[8];
        for(i=0; i<8; i++){
            cin>>a[i];
        }
        cout<<distance(a)<<endl;
    }
    return 0;
}
