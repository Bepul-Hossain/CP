#include<stdio.h>
void swapvalue(int *x,int *y)
{
    int temp;
    temp=*x;
    *x=*y;
    *y=temp;
}
void main()
{
    int p,q;
    p=5;
    q=4;
    swapvalue(&p,&q);
    printf("%d,%d",p,q);
}
