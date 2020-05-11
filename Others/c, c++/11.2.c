#include<stdio.h>
int main()
{
    int a[10][10],b[10][10],x[10][10],i,j,m,n;
    scanf("%d",&i);
    scanf("%d",&j);
    printf("   ========\n");
    for(m=0; m<i; m++){
        for(n=0; n<j; n++){
            scanf("%d",&a[m][n]);
        }
    }
    printf("   ========\n");
    for(m=0; m<i; m++){
        for(n=0; n<j; n++){
            scanf("%d",&b[m][n]);
        }
    }
    printf("   ========\n");
    for(m=0; m<i; m++){
        for(n=0; n<j; n++){
            x[m][n]=a[m][n]+b[m][n];
        }
    }
    for(m=0; m<i; m++){
        for(n=0; n<j; n++){
            printf("   %d",x[m][n]);
        }
         printf("\n");
    }




    return 0;
}
