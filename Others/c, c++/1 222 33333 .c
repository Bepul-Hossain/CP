#include<stdio.h>

int main(void)
{
    int i,j,k,n;
    printf("value n:");
    scanf("%d",&n);
    for(i=1;i<=n;i=i+1){
        for(j=i;j<n;j=j+1){
            printf(" ",j);
        }
        for(k=1;k<=(i*2)-1;k++){
            printf("%d",k);
        }
    printf("\n");
    }
    return 0;
}
