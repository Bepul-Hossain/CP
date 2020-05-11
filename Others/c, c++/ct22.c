#include<stdio.h>
int s(int n);
{   int sum=0;


    if(n==0){
         sum=sum+n;
        return sum;
    }
    else{
        return (sum+s(n));
    }
}
int main()
{
    int n;
    scanf("%d",&n);
    printf("%d\n",s(n));
    return 0;
}
