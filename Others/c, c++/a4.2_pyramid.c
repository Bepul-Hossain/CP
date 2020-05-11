#include<stdio.h>
int main()
{
    int n,i,j;
    FILE *p;
    p=fopen("pyramid.txt","w");
    scanf("%d",&n);
    for(i=1; i<=n; i++){
        for(j=1; j<=i; j++){
            fprintf(p,"%d",i);
        }
        fprintf(p,"\n");
    }


    return 0;
}
