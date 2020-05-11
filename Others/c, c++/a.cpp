//Sorting int
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    int tmp;
    int arr[10]={8,5,4,17,27,11,81,65,63,41};

    for(int i=0;i<10;i++){
        for(int j=i+1;j<10;j++){
            if(arr[i]>arr[j]){
                tmp=arr[i];
                arr[i]=arr[j];
                arr[j]=tmp;
            }
        }
    }

    for(int i=0;i<10;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}



