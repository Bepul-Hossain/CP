#include<stdio.h>
int sv(int *                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           x,int *y)
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
    q=6;
    sv(&p,&q);
    printf("p=%d q=%d",p,q);
}
