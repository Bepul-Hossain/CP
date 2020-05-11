#include<stdio.h>

int main()
{
    int i,j,a2[6],a[]={10,20,30,40,50,60};
     for(i=0;j=6;i<6;j>0;i++;j--)
        {
        a2[j]=a[i];
    }
    for(i=0;i<6;i++){
        a[i]=a2[i];
        printf("%d\n",a[i]);
    }


    return 0;
}


