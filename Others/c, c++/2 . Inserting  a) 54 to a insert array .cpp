#include<iostream>
using namespace std;
int main()
{
    int a[40],i,n,j,s;
    cin>>n;
    for(i=0; i<n; i++){
        cin>>a[i];
    }
    cin>>s;
    for(i=0; i<n; i++){
        if(a[i]>s){
            j=i;
            break;
        }
    }
    for(i=n; i>j; i--){
       a[i]=a[i-1];
    }
    a[j]=s;
    cout<<"after sorted then value is = ";
    for(i=0; i<=n; i++){
       cout<<a[i]<<" ";
    }
    return 0;
}
