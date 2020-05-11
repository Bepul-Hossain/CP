#include<stdio.h>

int main()
{
    int i,j,k,T,N;
    scanf("%d",&T);
    for(i=1;i<=T;i++){
        scanf("%d",&N);
        for(j=1;j<=N;j++){
            for(k=1;k<=N;k++){
            printf("* ",k);
            }
            printf("\n");
        }
    printf("\n");
    }
    return 0;
}
