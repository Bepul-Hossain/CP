#include<stdio.h>

int main()
{
    int n,x,y,z;
    double to,ave;
    scanf("%d",&n);
    to=n+(n*0.35);
    ave=to/160;
    printf("total %.2lf\naverage %.2lf",to,ave);
    return 0;
}
