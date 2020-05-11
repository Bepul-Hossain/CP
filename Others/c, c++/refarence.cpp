#include<iostream>
using namespace std;
void swapvalue(int &a,int &b)
{
    int temp;
    temp=a;
    a=b;
    b=temp;
}
int main()
{
    int i,j;
    i=4;
    swapvalue(i,j);
    cout<<"i="<<i<<" j="<<j<<endl;
}
