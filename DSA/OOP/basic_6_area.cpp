//Write a program to print the area of a rectangle by creating a class named 'Area'
//having two functions. First function named as 'setDim' takes the length and breadth
//of the rectangle as parameters and the second function named as 'getArea' returns
//the area of the rectangle. Length and breadth of the rectangle are entered through keyboard.

#include<bits/stdc++.h>
using namespace std;

class Area
{
public:
    int length;
    int width;
    void setDim(int l, int w)
    {
        length=l;
        width=w;

    }
    double getArea()
    {
        return length*width;
    }
};

int main()
{
    Area obj;
    obj.setDim(3,8);
    cout<<obj.getArea();
    return 0;
}
