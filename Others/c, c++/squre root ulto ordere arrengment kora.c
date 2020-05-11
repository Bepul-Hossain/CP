#include<stdio.h>
#include<math.h>
int main()
{
    long long x[6],n;
    int i;
    printf("enter n \n");
    scanf("%d",&n);
    for(i=0;i<n;i++){
        scanf("%d",&x[i]);
    }
    for(i=n-1;i>=0;i--)
    printf("%d",x[i]);
    return 0;
}
