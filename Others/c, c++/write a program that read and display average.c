#include<stdio.h>

int main()
{
    int a[100],i,j,k,n,sum=0;
    printf("n = ");
    scanf("%d",&n);
    printf("a[i] = ");
    for(i=0;i<n;i++){
        scanf("%d",&a[i]);
    }
    sum=0;
    for(i=0;i<n;i++){
        printf("%d ",a[i]);

    sum=sum+a[i];
    }
    printf("average = %.3lf",(double)sum/n);
    return 0;
}
