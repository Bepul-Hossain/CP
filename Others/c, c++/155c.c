#include<stdio.h>
main()
{
    int a,b,c,d,*x,*y;

    a=5;b=10;x=&c;y=&d;c=20;d=30;
    printf("%d%\n%d\n%d\n%d\n\n",a,b,x,*y);
    func1(&c,&d,&a,&b);
    printf("%d\n%d\n%d\n%d\n",a,b,*x,*y);

}
void func1(int *p,int *q,int *r,int *s){
    *p=100;*q=200;*r=300;*s=400;
}
