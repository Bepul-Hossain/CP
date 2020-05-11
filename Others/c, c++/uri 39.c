#include<stdio.h>

int main()
{
    double i,j,k,l,m,n,x;
    scanf("%lf%lf%lf%lf",&i,&j,&k,&l);
    m=((i*2)+(j*3)+(k*4)+(l*1))/10.0;
    printf("Media: %.1lf\n",m);

    if(m>=7.0){
        printf("Aluno aprovado.\n");
    }
    if(m<5.0){
        printf("Aluno reprovado.\n");
    }
    if(m=5.0&&m<=6.9){
        printf("Aluno em exame.\n");
        scanf("%lf",&n);
        printf("Nota do exame: %.1lf\n",n);
        x=(m+n)/2.0;
        if(x>=5.0)
            printf("Aluno aprovado.\n");
        else(x<=4.9);{
             printf("Aluno reprovado.\n");
        printf("Media final: %.1lf\n",x);
        }


    }

    return 0;
}
