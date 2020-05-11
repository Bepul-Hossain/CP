#include<iostream>

using namespace std;
int main()
{
    bool GetResult;
    int x,y,z;
    x=5,y=10,z=15;
    GetResult=true;
    cout<<"Result of GetResult=true:"<<GetResult<<endl;
    GetResult=x>y;
    cout<<"Result of GetResult=x>y:"<<GetResult<<endl;
    GetResult=x<y;
    cout<<"Result of GetResult=x<y:"<<GetResult<<endl;
    GetResult=x+y+x-z;
    cout<<"Result of x=x+y-z;"<<GetResult<<endl;
}
