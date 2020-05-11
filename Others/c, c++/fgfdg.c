#include<stdio.h>

int stl(char str[])
{
    int i,l=0;
    for(i=0;str[i]!='\0';i++){
        l++;
    }
    return l;
}
int main()
{
    char count[100];
    int l;
    while(1==scanf("%s",&count)){
        l=stl(count);
        printf("length: %d\n",l);
    }
    return 0;
}
