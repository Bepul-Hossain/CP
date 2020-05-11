#include<stdio.h>
int main()
{
    int n,i,j;
    FILE *p;
    p=fopen("pyramid.txt","w");
    scanf("%d",&n);
    for(i=1; i<=n; i++){
            fprintf(p,"%d\n",i);
    }


    return 0;
}

