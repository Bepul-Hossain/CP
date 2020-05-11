#include<stdio.h>

int main()
{
    int i,j;
    float k,SALARY;
    scanf("%d%d",&i,&j);
    scanf("%lf",&k);
    printf("NUMBER = %d\n",i);
    SALARY=j*k;
    printf("SALARY = U$ %.2lf\n",SALARY);
    return 0;
}
