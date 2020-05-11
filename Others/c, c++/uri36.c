#include<stdio.h>
#include<math.h>

int main()
{
    double A,B,C,R1,R2;
    scanf("%lf%lf%lf",&A,&B,&C);
    if(pow(B,2)<4*A*C || A==0)
    {
        printf("Impossivel calcular\n");
    }
    else{
            R1=(-B+sqrt(pow(B,2)-4*A*C))/(2*A);
            R2=(-B-sqrt(pow(B,2)-4*A*C))/(2*A);
               printf("R1 = %.5lf\nR2 = %.5lf\n",R1,R2);
           }
    return 0;

}
