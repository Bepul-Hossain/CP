#include<stdio.h>
#include<string.h>
#include<conio.h>
int main()
{
    char s[100],p[100];
    int l,i;
    gets(s);
    l=strlen(s);
    for(i=0; i<l; i++){
        if(s[i]>='a' && s[i]<='z'){
            printf("%c",s[i]-32);
            printf("%d\n",s[i]);
        }
        else{
        printf("%c",s[i]);
        }
    }



    return 0;
}
