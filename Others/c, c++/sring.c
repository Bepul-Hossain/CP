#include<stdio.h>

int main()
{
    char country[]="BangladEsh";
    int i,l;
    printf("%s\n",country);
    l=10;
    for(i=0;i<l;i++){
        if(country[i]>=65&&country[i]<=90){
            country[i]='a'+(country[i]-'A');
        }
    }
    printf("%s\n",country);
    return 0;
}
