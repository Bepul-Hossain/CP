#include<stdio.h>
int main()
{
    int n,i,j;
    scanf("%d",&n);
    for(i=1; i<=n; i++){
        for(j=1; j<=n-i; j++){
            printf(" ");
        }
        for(j=1; j<=i; j++){
            printf("%c",64+i);
            printf(" ");


        }printf("\n");
    }

    for(i=1; i<=n-1; i++){
        for(j=1; j<=i; j++){
            printf(" ");
        }
        for(j=1; j<=n-i; j++){
            printf("%c",64+n-i);
            printf(" ");


        }printf("\n");
    }


    return 0;
}
