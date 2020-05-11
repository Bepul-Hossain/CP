#include<stdio.h>
#include<string.h>
int main()
{
    char s[100],p[100],a[10][10][10][10][10][10][10][10][10];
    int l;
    gets(s);
    gets(p);
    //scanf("%s",&s);

   // l=strlen(s);
    //strrev(s);
    //printf("%d",l);
    strlwr(s);
    strupr(p);

    //printf("%s",s);
    //printf("%s",p);
    //printf("%d",l);
    printf("%s",s);
    printf("%s",p);
    return 0;
}
