//Write a program to print the area of two rectangles
//having sides (4,5) and (5,8) respectively by creating a class named 'Rectangle'
//with a function named 'Area' which returns the area.
//Length and breadth are passed as parameters to its constructor.


#include<bits/stdc++.h>

using namespace std;

class Reactangle
{
public:
    int s1, s2;
    Reactangle(int a, int b)
    {
        s1=a;
        s2=b;
    }
    void print_area()
    {
        cout<<s1*s2<<endl;
    }
};

int main()
{
    Reactangle r1(4,5), r2(5,8);
    r1.print_area();
    r2.print_area();

    return 0;
}
