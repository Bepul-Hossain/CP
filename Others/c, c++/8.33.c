#include<stdio.h>
int main()
{
    int n,i,j,k,l,m,p,q;
    scanf("%d",&n);
    for(i=1; i<=n; i++){
        for(j=1; j<=n-i; j++){
            printf("   ");
        }
        for(k=1; k<=i; k++){
            printf("%d  ",i+k-1);
        }
        for(l=i; l>=2; l--){
            printf("%d  ",l+i-2);
        }
        printf("\n");
    }
    for(i=1; i<=n; i++){
        for(m=1; m<=i; m++){
            printf("   ");
        }
        for(p=1; p<=n-i; p++){
            printf("%d  ",n+p-i-1);
        }
        for(q=n-i-1; q>=1; q--){
            printf("%d  ",q+4-i);
        }
        printf("\n");
    }


    return 0;

}
