#include<stdio.h>
#include<math.h>
int main()
{
    int n,i,m,s,t,j;
    scanf("%d",&m);
    scanf("%d",&n);
    for(i=m; i>=n; i--){
        scanf("%d",&s);
         t=sqrt(s);

        for(j=2; j<=t; j++){
            if(s%j==0){
                printf("Not prime\n");
                break;
            }
        }
    }
    return 0;
}
