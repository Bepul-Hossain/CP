#include<stdio.h>
int main()
{
    int n,k,i,a[500];
    printf("enter player number n and wins number k : ");
    scanf("%d    %d",&n,&k);
    printf("For each of the participants, and for all players these values are different.");
    for(i=0;i<n;i++){
     scanf("%d",&a[i]);
    }



    return 0;
}
