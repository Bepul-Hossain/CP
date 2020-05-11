#include<stdio.h>

int main()
{
   int i,x[5],av=0;
   printf("input:\n");
   for(i=0;i<5;i++){
    scanf("%d",&x[i]);
   }
   printf("output:\n");
   for(i=0;i<5;i++){
    printf("%d\n",x[i]);
    av=av+x[i];
   }
   printf("%d",av);
    return 0;
}
