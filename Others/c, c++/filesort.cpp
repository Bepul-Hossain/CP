#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main(){
    fstream data;
    ofstream assending,decending;
    data.open("data.txt");
    assending.open("assending.txt");
    decending.open("decending.txt");
    double a[100000],n,m,temp;
    int i,j,c=0;
    while(data>>n){
        a[c++]=n;
    }
    for(i=0;i<c;i++){
        for(j=i+1;j<c;j++){
            if(a[i]>a[j]){
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
        assending<<a[i]<<" ";
    }
    for(i=c-1;i>=0;i--){
        decending<<a[i]<<" ";
    }

    return 0;
}


