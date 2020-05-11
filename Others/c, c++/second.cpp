#include<iostream>
    using namespace std;
    int x;
    void changeX(void)
    {
        x=20;
    }
    int main(void)
    {
        int x;
        x=10;
        changeX();

        cout<<"value of x is:"<<::x;
    }
