#include<stdio.h>
int main()
{
    FILE *hasan;
    hasan=fopen("a.txt","w");
    char lelin[60];
    fgets(lelin,60,hasan);
    puts(lelin);

    return 0;
}
