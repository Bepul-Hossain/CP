#include<stdio.h>
int main()
{
    char str[11];
    scanf("%[^\n]",str);
    //puts(str);
    //puts(str);
    int i,l=0;
    for(i=0;str[i]!='\0';i++){
        l=l+1;
    }
    printf("%s  %d",str,l);
    return 0;
}
