//array index transfer data frist from last //
#include<stdio.h>

int main()
{
    int i,a[10]={10,20,30,40,50,60,70,80,90,100,110,120},temp,j;
    for(i=0,j=9;i<10;i++,j--){
            temp=a[j];
        a[j]=a[i];
        a[i]=temp;
    }for(j=9;j>=0;j--){
        printf("%d\n",a[j]);
    }
    return 0;
}
