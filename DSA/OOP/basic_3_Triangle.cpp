//Write a program to print the area and perimeter of a triangle having sides of 3, 4 and 5 units
//by creating a class named 'Triangle' with a function to print the area and perimeter.

#include<bits/stdc++.h>
using namespace std;

class Triangle
{
public:

    double area(int a, int b, int c)
    {
        return (a*b*c)/2.0;
    };

    void perimeter(int a, int b, int c)
    {
        cout<<2*(a+b+c)<<endl;
    };

};
int main()
{
    Triangle t;

    cout<<t.area(3,4,5)<<endl;
    t.perimeter(3,4,5);
    return 0;
}
