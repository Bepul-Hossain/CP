#include<stdio.h>
int main()
{
    char str[39],str_new[30];
    int i,j,n;
    gets(str);
    scanf("%d",&n);
    for(i=n,j=0;i>=0,j<=n;i=i-1,j=j+1){
        str_new[j]=str[i];
    }
    str_new[j]='\0';
    printf("%s",str_new);
    return 0;
}
