//karim to position 5
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    int loc;
    string arr[10]={"Alipto","Amith","Anup","Arup","Rahim","Rana","Sakib","Topu","Zahid"};

    for(int i=9;i>4;i--){
        arr[i]=arr[i-1];
    }
    arr[4]="Karim";
    for(int i=0;i<10;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}


