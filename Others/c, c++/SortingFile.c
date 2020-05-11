#include<stdio.h>
#include<stdlib.h>

int main()
{
    FILE *fp1,*fp2,*fp3;

    fp1= fopen("Unordered file.txt","r");
    if(fp1 == NULL)
   {
      printf("Error!");
      return 1;
   }
    fp2=fopen("acending_order's file.txt","w");
    fp3=fopen("decending_order's file.txt","w");
    int a[10100],i,j,temp,n=1000;
    for(i=0; i<n; i++){
        fscanf(fp1,"%d",&a[i]);
    }
    for(i=0;i<n-1;i++){
        for(j=i+1;j<n;j++){
            if(a[i]>a[j]){
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }

    }
    for(i=0;i<n;i++){
        printf("%d ",a[i]);
    }

    for(i=0;i<n;i++){
        fprintf(fp2,"%d ",a[i]);
    }
    for(i=0;i<n-1;i++){
        //fscanf(fp1,"%d",&a[i]);
        for(j=i+1;j<n;j++){
            if(a[i]<a[j]){
                temp=a[j];
                a[j]=a[i];
                a[i]=temp;
            }
        }

    }
    for(i=0;i<n;i++){
        fprintf(fp3,"%d ",a[i]);
    }
    return 0;
}
