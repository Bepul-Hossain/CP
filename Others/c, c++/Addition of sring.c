#include<stdio.h>
int main()
{
    int i,j,k=5;
    char str[30]="bepul", str_new[40]="good";
    for(i=k;j=0;str_new[j]!='\0';i++,j++){
      str[i]=str_new[j];
    }
    str[i]='\0';
    printf("%s\n",str);
    return 0;
}
