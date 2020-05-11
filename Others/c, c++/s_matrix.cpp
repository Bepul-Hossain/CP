#include<iostream>

using namespace std;

int main(){
    int j,k,l,a[11];
    for(int i=1;i<11;i++){
        cin>>a[i];
    }
    cout<<"Enter the position of element \n";
    cin>>j>>k;
    if(j<k){
        cout<<0<<endl;
        return 0;
    }
    l=j*(j-1)/2+k;
    cout<<a[l]<<endl;
    return 0;
}
