#include<stdio.h>
#include<string.h>
int main()
{
    int i,b=0;
    char s[10000];
    char a[2];

    scanf("%s",a);
    scanf("%[^\n]",s);


    for(i=0; i<strlen(s); i++){
        if(s[i]==a){
            b=b+1;
        }


    }
     printf("%d\n",b);

    return 0;
}
