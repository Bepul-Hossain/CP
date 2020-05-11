#include<iostream>
using namespace std;
struct A{
    int a;
    int b[3];
};
class C{
    A a1;
public:
    A a2;
    void printA(){
    a1.a=5;
    a1.b[0]=7;
    a1.b[1]=8;
    a1.b[2]=9;
    cout<<"valu of a="<<a1.a<<endl;
    cout<<"va1lue of b="<<endl;
    for(int i=0;i<3;i++){
        cout<<a1.b[i]<<endl;
        }

    cout<<"value a2"<<endl;
    cout<<"a2.a "<<a2.a;
    cout<<"a2.b[] "<<endl;
    for(int i=0;i<3;i++){
        cout<<a2.b[i]<<endl;
        }
    }
};
int main()
{
    C o;
    cout<<"a2.a= "<<endl;
    cin>>o.a2.a;
    cout<<"a2.b[] "<<endl;
    for(int i=0;i<3;i++){
        cin>>o.a2.b[i];
    }
    o.printA();
}
