#include<stdio.h>

int main()
{
    int f[]={67,87,56,65,95},s[]={86,65,87,56,58,},a[]={69,25,68,65,89,90},i,k;
    double j;
        for(i=0;i<5;i++){
            j=f[i]/4.0+s[i]/4.0+a[i]/2.0;
            printf("roll: %d    %.2lf\n",i+1,j);
        }
    return 0;
}
