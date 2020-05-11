#include<stdio.h>
#include<math.h>
int main()
{
    double pi,R,a;
    scanf("%lf",&R);
    pi=3.14159;
    a=(4/3.0)*pi*pow(R,3);
    printf("VOLUME = %.3lf\n",a);
    return 0;
}
