//grading point

#include<stdio.h>

int main()
{
    int m;
    scanf("%d",&m);

    if(80<=m&&m<=100){
        printf("A+\n");
    }
    if(70<=m&&m<80){
        printf("A\n");
    }
    if(60<=m&&m<70){
        printf("A-\n");
    }
    if(50<=m&&m<60){
        printf("B\n");
    }if(40<=m&&m<50){
        printf("C\n");
    }
    if(33<=m&&m<40){
        printf("D\n");
    }
    if(0<=m&&m<32){
        printf("F\n");
    }
    return 0;
}
