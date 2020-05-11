#include<iostream>
using namespace std;

void push(string s){
    cout<<s;
}

int main()
{
    string ss;
    cin>>ss;
    if(ss=="v")
        push(ss);

    return 0;
}
