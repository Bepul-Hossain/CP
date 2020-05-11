//febonacci series
//          0 1 1 2 3 5 8 13 21 34 55 89 . . . . .
//Position  0 1 2 3 4 5 6  7  8  9 10 11 . . . . .
#include<iostream>
#include<bits/stdc++.h>
int f[500];
using namespace std;

int feb(int n){                                         //Fn=0,             when n=0;
    if(n==0)                                            //  =1,             when n=1;
        return 0;                                       //  =F(n-1)+F(n-2), when n>=2;
    if(n==1)                                            //
        return 1;
    return feb(n-1)+feb(n-2);
}

int main(){
    int n,febonacci;
    cin>>n;
    febonacci=feb(n);
    cout<<n<<" th febonacci number is "<<febonacci<<endl;
    return 0;

}
