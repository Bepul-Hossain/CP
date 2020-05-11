#include<iostream>
using namespace std;
int main()
{
    int a[50],i,temp,n;
    cout<<"enter comparing number of n = ";
    cin>>n;
    cin>>a[0];
    for(i=1; i<n; i++){
       cin>>a[i];
       if(a[i]>a[0]){
            temp=a[i];
            a[0]=temp;
       }
       else{
        temp=a[0];
       }
    }
    cout<<"maximum value is = "<<temp<<endl;

    return 0;
}
