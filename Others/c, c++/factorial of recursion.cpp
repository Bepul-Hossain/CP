#include<iostream>
using namespace std;
long long fact(int n)
{
    if(n==0){
        return 1;
    }
    else{
        return (long long)n*fact(n-1);
    }
}
int main()
{
    int n;
    cin>>n;
    cout<<n<<"! = "<<fact(n)<<endl;
    return 0;
}
