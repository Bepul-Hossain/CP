#include<stdio.h>
#include<stdlib.h>
int main()
{
    int *n ;
    n=(int *)malloc(sizeof(int ));
    if(n==0){
        printf("error\n");
    }

    //scanf("%d",n);
    *n=23;
    printf("%d",*n);
    free(n);
    return 0;
}
