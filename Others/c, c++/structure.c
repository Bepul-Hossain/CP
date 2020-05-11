#include<stdio.h>

    struct stru{
        int a;
        float b;
        char c[];
    };
    struct stru abc;

    int main(){

    printf("int float char");
    scanf("%d %f %s",&abc.a,&abc.b,abc.c);
    printf("%d %s %0.3f\n",abc.a,abc.c,abc.b);
    return 0;

}
