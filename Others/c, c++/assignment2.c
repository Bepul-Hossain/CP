#include<stdio.h>
#include<string.h>
struct goods{
    char type[80];
    int id;
    double amount;
}tag[10000];

double low(double x)//x=low quality percentage of garmented
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
     FILE *fp;
    char filename[]="government_tax.txt";

    fp=fopen(filename,"a+");
    fprintf(fp," Day: \n date: \n total low = \n total midium = \n total high = \n In total tax = \n\n\n");
    fclose(fp);


    char str[50];
    printf("Enter germents factory Name:\n");
    scanf("%s",str);
    int n,i;
    double amount,tax,total_low=0,total_midium=0,total_high=0;
    printf("Number of germented n = ");
    scanf("%d",&n);
    printf("amount of every germented:\n");
    for(i=1;i<=n;i++){
        scanf("%lf",&tag[i].amount);
        getchar();
        printf("enter product type: ");
        gets(tag[i].type);
        printf("enter product id: ");
        scanf("%d",&tag[i].id);
        if(tag[i].amount>0&&tag[i].amount<=1000){
            tax=low(tag[i].amount);
            total_low=total_low+tax;
        }
        if(tag[i].amount>1000&&tag[i].amount<=3000){
            tax=midium(tag[i].amount);
            total_midium=total_midium+tax;
        }
        if(tag[i].amount>3000){
            tax=high(tag[i].amount);
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

