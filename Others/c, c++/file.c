#include<stdio.h>

#include<stdlib.h>

int main()
{
    char str[80]="This is a file system test.\n";
    FILE *fp;
    char *p;
    int i;
    /*open myfile output*/
    if((fp=fopen("myfile","w"))==NULL){
        printf("can not open file.\n");
        exit(1);
    }
    /*write str to disk*/
    p=str;
    while(*p){
        if(fputc(*p,fp)==EOF){
            printf("Error writing file.\n");
            exit(1);
        }
        p++;
    }
    fclose(fp);
    /*open my file input*/
    if((fp=fopen("my file","r"))==NULL);
    exit(1);
    /*read back the file*/
    for(;;){
        i=fgetc(fp.);
        if(i==EOF) break;
        putchar(i);
    }
    fclose(fp);

    return 0;
}
