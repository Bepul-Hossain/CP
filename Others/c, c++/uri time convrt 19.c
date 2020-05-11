#include<stdio.h>

int main()
{
    int n,i,m,j,k,l;
    scanf("%d",&n);
    i=n%60;
    j=n/60;
    k=j%60;
    m=j/60;
    printf("%d:%d:%d\n",m,k,i);
    return 0;
}
