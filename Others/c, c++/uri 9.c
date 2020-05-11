#include<stdio.h>

int main()
{
    char s;
    scanf("%s",&s);
    double i,j,k;
    scanf("%lf",&i);
    scanf("%lf",&j);
    k=i+j*.15;
    printf("TOTAL = R$ %.2lf\n",k);

    return 0;
}
