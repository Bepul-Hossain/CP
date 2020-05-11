#include<stdio.h>
int main()
{
    int i,j,k,m,p,q,n;
    printf("value n;");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=i;j<n;j++){
        printf(" ",i);
        }
        for(k=1;k<=(i*2)-1;k++){
        printf("*",k);
        }
        printf("\n");
    }
    for(m=1;m<n;m++){
        for(q=m;q<=(m*2)-1;q++){
            printf(" ",q);
        }
        for(p=p+1;p<=((n-1)*2)-1;p=p+1){
            printf("*",p);
        }p=p+1;
    printf("\n");
    }
    return 0;
}
