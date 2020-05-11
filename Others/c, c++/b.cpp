//Sorting string

#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    string tmp;
    string arr[10]={"Bipul","Karim","Alipto","Topu","Amith","Sakib","Anup","Zahid","Arup","Rana"};

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



