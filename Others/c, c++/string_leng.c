#include<stdio.h>
#include<string.h>
int main()
{
    char a[50]="bepul is a lazy boy";
    char b[58];
   strcat(a,b);
    strcpy(b,a);
    printf("%s\n",b);
   printf("%d\n",strlen(a));
   printf("length is %s\n",a);
    int len=strlen(b);
   printf("%d\n",len);

    return 0;
}

