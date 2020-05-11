#include<stdio.h>
int main()
{
    int i;
    FILE *fp;
    fp=fopen("case.txt","w");
    for(i=1; i<=10; i++){
        fprintf(fp,"%d\n",i);
    }

    return 0;
}
