//Rahim to a sorted array
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    int loc;
    string arr[9]={"Alipto","Amith","Anup","Arup","Rana","Sakib","Topu","Zahid"};

    for(int i=0;i<7;i++){
        if(arr[i]<"Rahim" && arr[i+1]>="Rahim"){
            loc=i+1;
        }
    }
    for(int i=8;i>loc;i--){
        arr[i]=arr[i-1];
    }
    arr[loc]="Rahim";
    for(int i=0;i<9;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}


