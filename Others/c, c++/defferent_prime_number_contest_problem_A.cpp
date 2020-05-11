#include<iostream>
#include<cstdio>
using namespace std;
int main()
{
    int n,i,k=-1,j,a[10000],c=0,p=1,s=0;
    scanf("%d",&n);
    for(i=0,k=k+1;i<n;){
        if(n%2==0){
            printf("%d  ",2);
            n=n/2;
            a[k]=2;
            c=1;
        }
        else{
            i=n;
        }
    }
    for(j=3;j<=n;){
        if(n%j==0){
            printf("%d  ",j);
            n=n/j;
            if(j==j){
                p=p;
            }
            else{
                p=p+1;
            }
        }
        else{
               j=j+2;
        }
    }
    printf("\n");
    printf("%d",c+p);
    return 0;
}
