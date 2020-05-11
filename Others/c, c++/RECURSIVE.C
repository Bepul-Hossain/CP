#include<stdio.h>

int fn(int n){

    if(n==0)
        return n;
    else
        return n+fn(n-2);

}
    int main()
    {
        int a,c,x;
        a=30;
        c=20;
        x=fn(a);
        printf("sum:%d\t",x);

        return 0;
    }
