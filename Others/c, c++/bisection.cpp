#include<bits/stdc++.h>
using namespace std;
double result;

double res(int x){
    result= (x*x*x)-1;
    return result;
}

int main(){

    double xr, a=-5, b=5;
        xr=0;
    while(res(xr)<0.0002){
            cout<<res(xr)<<endl;
        if(res(xr)==0){
            cout<<"root = "<<xr;
            return 0;
        }
        else if(res(xr)>0){
            b=xr;
        }
        else {
            a=xr;
        }
        xr=(a+b)/2.0;
    }
    cout<<res(xr)<<endl;
    cout<<"root = "<<xr;
    return 0;
}
