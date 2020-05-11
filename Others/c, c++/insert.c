//write a program that insert any number in array//
#include<stdio.h>
int main()
{
    int a[100],n,p,i,j;
    printf("velue n = ");
    scanf("%d",&n);
    for(i=0;i<n;i++){
        scanf("%d",&a[i]);
    }
    printf("enter any position to insert :");
    scanf("%d",&p);
    if(p<0||p>n){
        printf("impossible");
    }
    else{
        for(i=n-1;i>=p;i--)
        a[i+1]=a[i];
        printf("insert: ");
        scanf("%d",&a[p]);
        n++;
    }
    printf("\nAfter insert array contains:");
    for(i=0;i<n;i++);
    printf("%4d",a[i]);
    return 0;
}
