#include<stdio.h>
int i,j;
main()
{
    for(i=1;i<=7;i++){
        for(j=2;j<=7;j++){
            if(i==j-1){
                printf("A");
            }
            else{
                 printf("0");
                    }
        }
        printf("\n");
    }
}
