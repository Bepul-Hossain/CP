#include<stdio.h>
int main()
{

    char str[30]="bepul", str_new[40]=" good";
    int i,j,k=5;
    for(i=k,j=0;str_new[j]!='\0';i++,j++){
      str[i]=str_new[j];
    }
    str[i]='\0';
    printf("%s\n",str);
    return 0;
}
