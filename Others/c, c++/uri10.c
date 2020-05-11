#include<stdio.h>

int main()
{
    int p,n,i,j;
    float t,k,a;
    scanf("%d%d%f%d%d%f",&p,&n,&t,&i,&j,&k);
    a=(n*t+j*k);
    printf("VALOR A PAGAR: R$ %.2f\n",a);
    return 0;
}
