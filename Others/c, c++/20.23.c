#include<stdio.h>
#include<stdlib.h>
int main()
{
    int n,*a,i;
    scanf("%d",&n);
    a=(int *)malloc(sizeof(int)*n);
    printf("%d",a);
    free(a);

    return 0;
}
