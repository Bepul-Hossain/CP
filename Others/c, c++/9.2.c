#include<stdio.h>
int main()
{
    int i,n;
    scanf("%d",&n);
    for(i=15; i>=0; i=i-3){
      printf("%d",(n>>i)&7);
    }


    return 0;
}
