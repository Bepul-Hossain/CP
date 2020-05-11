#include<stdio.h>

int main()
{
    int T,i,j,k,M,p,N;
    scanf("%d",&T);
    for(i=1;i<=T;i++){
        scanf("%d",&N);
        scanf("%d",&p);
        k=N%10;
        j=N/p;
        M=k+j;
        printf("%d\n",M);
    }
    return 0;
}
