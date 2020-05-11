#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<conio.h>

int main()
{
    char *a,*b,*max;
    a=(char *)malloc(sizeof(char)*50);
    b=(char *)malloc(sizeof(char)*50);
    scanf("%[^\n]",a);
    scanf("%[^\n]",b);
   /* if(strcmp(a,b)>0){
        strcpy(max,a);
    }
    else{
        strcpy(max,b);
    }*/
    printf("maximum= %[^\n]",b);

    return 0;
}
