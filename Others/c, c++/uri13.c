#include<stdio.h>

int main()
{
    int a,b,c,MaiorAB,t;
    scanf("%d%d%d",&a,&b,&c);
    MaiorAB=(a+b+abs(a-b))/2;
    t=(MaiorAB+c+abs(MaiorAB-c))/2;
   printf("%d eh o maior\n",t);

    return 0;
}
