#include<stdio.h>

int main()
{
    int i,n,s=0;
    scanf("%d",&n);
    for(i=0;i<=n;i++){
        s=s+i;
        printf("%d\n",i);
    }
    printf(" out %d\n",s);
    return 0;
}
