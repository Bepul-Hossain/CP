#include<stdio.h>
int main()
{
    FILE *output;
    output=fopen("out.txt","w");
    char str[30];
    gets(str);
    fputs(str,output);

    return 0;
}
