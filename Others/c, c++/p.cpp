#include<iostream>
#include<cstdio>
using namespace std;
int main()
{
    int n,i,k=-1,j,a[10000];
    scanf("%d",&n);
    for(i=0,k=k+1;i<n;){
        if(n%2==0){
            printf("%d  ",2);
            n=n/2;
            a[k]=2;
        }
        else{
            i=n;
        }
    }
    for(j=3;j<=n;j){
        if(n%j==0){
            printf("%d  ",j);
            n=n/j;
        }
        else{
               j=j+2;
        }
    }
    return 0;
}
