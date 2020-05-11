#include<stdio.h>

int main()
{
    int i,j;
    i=3,j=5;
    swapvalue(&i,&j);
    printf("%d,%d",i,j);
}
int swapvalue(int *x,int *y)
{

int temp;
    temp=*x;
    *x=*y;
    *y=temp;
}
