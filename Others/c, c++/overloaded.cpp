#include<iostream>
using namespace std;

int add(int x,int y){
    return x+y;
}
float add(float x,float y){
     return x+y;
}

int main()
{
    cout<<"int="<<add(5,6)<<endl<<endl;
    cout<<"double="<<add(2,5.6)<<endl;
}
