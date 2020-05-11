//Delete Karim from a sorted array
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    int loc;
    string arr[10]={"Alipto","Amith","Anup","Arup","Bipul","Karim","Rana","Sakib","Topu","Zahid"};

    for(int i=0;i<10;i++){
        if(arr[i]=="Karim"){
            loc=i;
        }
    }
    for(int i=loc;i<9;i++){
        arr[i]=arr[i+1];
    }
    arr[9]='\0';
    for(int i=0;i<9;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}



