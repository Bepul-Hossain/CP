#include<stdio.h>

int main()
{
    int a[100],n,i,j,k,sum=0;
    scanf("%d",&n);
    for(i=0;i<n;i++){
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++){
        printf("%d ",a[i]);
    }
    printf("\n");
    for(i=0;i<n;i++)
        sum=sum+a[i];

    printf("sum = %d",sum);
    return 0;
}
