#include<bits/stdc++.h>
using namespace std;
struct Data{
    int x;
    int y;
};
class Interpole{
    double result;
    int i,j;
    double term;
    public :
     double estimate_value(Data f[],int x,int n){
        result =0;
        for(i=0;i<n;i++){
            term =f[i].y;
            for(j=0;j<n;j++){
                if(i!=j){
                    term=term*(x-f[j].x)/double(f[i].x-f[j].x);
                }
            }
            result+=term;
        }
        return result;

    }


};
int main(){
    Interpole ob;
    Data f[100];
    int n,i;
    double x,y,ans;
    cout<<"Enter how many data is given?: ";
    cin>>n;
    for(i=0;i<n;i++){
        cin>>x>>y;
        f[i].x=x;
        f[i].y=y;

    }
    cout<<endl<<"enter the x: ";
    cin>>x;
    ans=ob.estimate_value(f,x,n);
    cout<<ans<<endl;

    return 0;
}

