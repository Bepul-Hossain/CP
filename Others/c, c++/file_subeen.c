#include<stdio.h>
int main()
{
    FILE *fp;
    char filename[]="our_file.txt";

    fp=fopen(filename,"r");
    fprintf(fp,"Tax of government  ");

    fprintf(fp,"hi\n");
    fclose(fp);


     fp=fopen(filename,"a+");
    fprintf(fp,"Tax of government\n ");

    fprintf(fp,"go");
    fclose(fp);


    return 0;
}
