#include<iostream>
using namespace std;
class A;
class B{
    int pb;
public:
    B(){pb=0;}
    void getpb(int x){pb=x;}
     void showpb(A a);
};
class A{
    int pa;
public:
    A(){
    pa=0;
    }
    void getpa(int x){pa=x;}
    friend void B::showpb(A a);
};
void B::showpb(A a){
    cout<<a.pa<<endl;
    cout<<pb<<endl;
    }
int main()
{
    A a1;
    B b1;
    a1.getpa(23);
    b1.getpb(89);
    b1.showpb(a1);
}
