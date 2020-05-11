#include<stdio.h>
double low
(double x)//x=low quality persantence of germented
{
    x=x*0.1;
    return x;
}

double midium(double y)//y=midium quality persantence of germented
{
    y=y*0.15;
    return y;
}

double high(double z)//z=high quality persantence of germented
{
    z=z*0.2;
    return z;
}

int main()
{
    char str[50];
    printf("Enter germents factory Name:\n");
    scanf("%s",str);
    int n,i;
    double amount,tax,total_low=0,total_midium=0,total_high=0;
    printf("Number of germented n = ");
    scanf("%d",&n);
    printf("amount of every germented:\n");
    for(i=1;i<=n;i++){
        scanf("%lf",&amount);
        if(amount>0&&amount<=1000){
            tax=low(amount);
            total_low=total_low+tax;
        }
        if(amount>1000&&amount<=3000){
            tax=midium(amount);
            total_midium=total_midium+tax;
        }
        if(amount>3000){
            tax=high(amount);
            total_high=total_high+tax;
        }
    }
    printf("total low = %.2lf\n",total_low);
    printf("total midium = %.2lf\n",total_midium);
    printf("total high = %.2lf\n",total_high);

    printf("In total = %.2lf\n",total_low+total_midium+total_high);

    printf("Prepared By %s\n",str);
    return 0;
}
