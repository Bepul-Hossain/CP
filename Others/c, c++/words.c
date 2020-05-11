#include<stdio.h>
#include<string.h>
int main(){
    char str[15]="Md. Tareq Zaman";
    char *wd[24];
    int in=0 ,i ,j,len=0;
    for(i=0;i<strlen(str);i++){
        if(str[i]==' '){
            len=0;
            in++;
        }
        if(str[i]!=' '||str[i]!=','){
            wd[in][len++]=str[i];
            //printf("%s\n",wd[in]);
        }

    }
    for(i=0;i<in;i++){
        printf("%s",wd[i]);
    }


    return ;
}
