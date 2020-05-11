#include<iostream>
using namespace std;
int main()
{
    int *i;
    i=new int;
    *i=12;
    cout<<*i;
    delete i;
}
