//99 to position 5
#include<iostream>
using namespace std;

int main(){
    int loc;
    int arr[11]={4,5,8,11,17,28,41,63,65,81};
    for(int i=10;i>4;i--){
        arr[i]=arr[i-1];
    }
    arr[4]=99;
    for(int i=0;i<=10;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}



