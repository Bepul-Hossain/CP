#include<stdio.h>
int main()
{
    int n,m,count=0;
    //printf("enter experience n\n");
    scanf("%d",&n);
    //printf("enter newbies m\n");
    scanf("%d",&m);
    for(;0<n&&0<m&&3<=n+m;){
        if(n>=m){
            n=n-2;
            m=m-1;
        }
        else{
            n=n-1;
            m=m-2;
        }
        count=count+1;
    }
    printf("%d\n",count);
    return 0;
}
