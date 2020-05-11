#include<stdio.h>
int a(int x)
{
    int y=x;
    x=2*y;


     printf("%d %d\n",x,y);
}
int main()
{
    int x=10,y=20,z=30;
    z=a(x);
    printf("%d %d %d\n",x,y,z);
    return 0;
}
