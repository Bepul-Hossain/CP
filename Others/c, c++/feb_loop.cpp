//febonacci series
//          0 1 1 2 3 5 8 13 21 34 55 89 . . . . .
//Position  0 1 2 3 4 5 6  7  8  9 10 11 . . . . .
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    int feb, prev,temp,n;
    cin>>n;           //position of febonacci number
    prev=1;
    feb=0;
    for(int i=1;i<=n;i++){
        temp=feb;
        feb=feb+prev;
        prev=temp;
    }
    cout<<n<<"-th Febonacci number is "<<feb<<endl;
    return 0;
}
