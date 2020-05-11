#include<stdio.h>

int main()
{
    int f[5],s[5],t[5],i;
    double to;
    for(i=0;i<5;i++){
        scanf("%d%d%d",&f[i],&s[i],&t[i]);
    }
    for(i=0;i<5;i++){
        to=f[i]/4.0+s[i]/4.0+t[i]/2.0;

    printf("%d | to = %0.2lf\n",i+1,to);
    }

    return 0;
}
