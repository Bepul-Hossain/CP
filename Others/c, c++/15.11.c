#include<stdio.h>
int main()
{
    int i,n,a[100];
    FILE *p;
    p=fopen("pyramid.txt","r");
    //scanf("%d",&n);
    for(i=0; i<EOF; i++){
        fscanf(p,"%d",&a[i]);
        printf("%d\n",a[i]);
    }
    return 0;
}
