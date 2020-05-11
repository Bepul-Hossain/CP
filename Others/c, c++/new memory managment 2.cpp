#include<iostream>
using namespace std;
int main()
{
    double *r;
    r=new double;
    *r=45.5655;
    cout<<*r;
    delete r;
}
