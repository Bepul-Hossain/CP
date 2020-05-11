#include<stdio.h>
int main()
{
    int i,j,c,a[]={56,58,69,56,75,12,90,89,78,69};

    for(i=45;i<=90;i++){
            c=0;
        for(j=0;j<11;j++){
            if(i==a[j]){
                c++;
            }
        }if(c>=1){
        printf("%d = %d\n",i,c);
        }
    }
    return 0;
}
