#include<iostream>
using namespace std;
class B;
class A{
private:
    int pa;
public:
    A(){pa=0;}
    void getpa(int x){pa=x;}
    friend void showvalue(A a, B b);
};
class B{
    int pb;
public:
    B(){pb=0;}
    int getpb(int x){pb=x;}
    friend void showvalue(A a, B b);
};
void showvalue(A a, B b){
    cout<<a.pa<<endl;
    cout<<b.pb<<endl;
}
int main()
{
    A a;
    B b;
    a.getpa(45);
    b.getpb(34);
    showvalue(a,b);
}
