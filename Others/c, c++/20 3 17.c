#include<stdio.h>
int main()
{
    int a[10],i,j,k;
    for(i=0;i<10;i++){
        scanf("%d",&a[i]);
    }
    for(i=0;i<10;i++){
    printf("out %d\n",a[i]+i);
    }
    return 0;
}
