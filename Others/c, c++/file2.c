#include<stdio.h>

int main(){
    int i,x=0,arr[3];
    FILE *fp;
    fp=fopen("toma.txt","w");
    for(i=0;i<3;i++){
        fscanf(fp,"%d",&arr[i]);
        x=x+arr[i];
    printf("x=%d\n",x);
    }


    return 0;

}
