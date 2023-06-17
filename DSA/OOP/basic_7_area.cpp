//Write a program to print the area of a rectangle by creating a class named 'Area'
//taking the values of its length and breadth as parameters of its constructor and
//having a function named 'returnArea' which returns the area of the rectangle.
//Length and breadth of the rectangle are entered through keyboard.

#include<bits/stdc++.h>

using namespace std;

class Area
{
public:
    int len, breadth;
    Area(int l, int b)
    {
        len=l;
        breadth=b;
    }

    double returnArea()
    {
        return len*breadth;
    }

};

int main()
{
    Area obj(3,9);

    cout<<obj.returnArea()<<endl;

    return 0;
}
