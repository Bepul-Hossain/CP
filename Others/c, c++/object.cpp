#include<iostream>
using namespace std;
class A{
public:
    int a;
    int b;
    void pa(){cout<<"a+b  "<<a+b<<endl;}
};
A a1;
int f(){a1.a=34; a1.b=46; a1.pa();}
int main()
{
    a1.a=3;
    a1.b=7;
    a1.pa();
    f();
}
