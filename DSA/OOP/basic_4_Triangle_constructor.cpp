//Write a program to print the area and perimeter of a triangle having sides of 3, 4 and 5 units
//by creating a class named 'Triangle' with the constructor having the three sides as its parameters.

#include<bits/stdc++.h>

using namespace std;

class Triangle
{
public:
    int s1, s2, s3;

    Triangle(int a, int b, int c)
    {
        s1=a;
        s2=b;
        s3=c;
    }

    void print_area()
    {
        cout<<(s1*s2*s3)/2.0<<endl;
    }
};

int main()
{
    Triangle t(2,3,5);
    t.print_area();

    return 0;
}
