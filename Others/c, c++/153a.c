#include<stdio.h>
int main()
{
    int a[]={1,2,9,9,7},i,j,temp;
    for(i=0;i<=5;i++){
        for(j=i+1;j<=5;j++)
            if(a[i]>a[j]){
            temp=a[j];
            a[j]=a[i];
            a[i]=temp;
            }

    }
    for(i=0;i<=5;i++){
        printf("%d ",a[i]);
    }
    return 0;
}
