#include<stdio.h>


int x=1,y=2;
void mf(int y)
{
    y=y*2;
    x=x+10;
    printf("mf,x=%d,y=%d\n",x,y);
}
int main()
{
    int y;
    x=10;
    mf(y);
    printf("main,x=%d,y=%d\n",x,y);
    return 0;
}
