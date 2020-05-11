#include<stdio.h>

int main()
{
    double n;
    scanf("%lf",&n);
    if(n<0||n>100)
        printf("Fora de intervalo");
    if(n>=0&&n<=25){
        printf("Intervalo [0,25]");
        }
    if(n>25&&n<=50){
        printf("Intervalo (25,50]");
        }
    if(n>50&&n<=75){
        printf("Intervalo (50,100]");
        }
    if(n>75&&n<=100){
        printf("Intervalo (75,100]");
        }


    return 0;
}
