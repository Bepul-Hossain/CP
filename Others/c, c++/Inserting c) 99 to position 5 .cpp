#include<iostream>
using namespace std;
int main()
{
    int a[40],i,n,j,s;
    cin>>n;
    for(i=0; i<n; i++){
        cin>>a[i];
    }
    cin>>s;  //insert position
    for(i=n; i>s; i--){
        a[i]=a[i-1];
    }
    cin>>a[s];
    cout<<"after inserting s position then = ";
    for(i=0; i<=n; i++){
        cout<<a[i]<<"  ";
    }
    return 0;
}
