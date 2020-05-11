#include<stdio.h>
int r(double x)
{
    double y;
    y=0.15*x;
    return y;
}
int main()
{
    double f,s;

    s=10.2;
    f=r(s);
    printf("%lf",f);
    return 0;
}
