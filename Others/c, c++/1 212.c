#include<stdio.h>

int main()
{
    int i,j,k,m,n;
    printf("value n;");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=i;j<n;j++){
            printf(" ",j);
        }
        for(k=i;k>= 1;k--){
            printf("%d",k);
        }
        for(m=2;m<=i;m++){
            printf("%d",m);
        }
        printf("\n");
    }
    return 0;
}
