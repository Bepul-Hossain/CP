#include<iostream>

using namespace std;

class stack{

    int st[10],a;
public:

    stack(){a=0;};
    void push(int x){

        if(a==10){

            cout<<"out of stack\n";
            return ;
        }
        st[a]=x;
        a++;
    }

    int pop(){

        a--;
        return st[a];
    }
};

int main(){

    stack ob;

    ob.push(10);
    ob.push(100);

    cout<<ob.pop()<<endl;
    cout<<ob.pop();

    return 0;



}
