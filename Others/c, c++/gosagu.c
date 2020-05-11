#include<stdio.h>

int main()
{
    int a,b,x;
    scanf("%d%d",&a,&b);
    if(a>b){
        x=b;
    }
    else{
        x=a;
    }
    for(;x>=1;x--){
        if(a%x==0&&b%x==0){
            printf("%d",x);
            break;
        }
    }
    return 0;
}
