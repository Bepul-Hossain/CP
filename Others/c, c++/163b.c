#include<stdio.h>
#include<stdio.h>


    int x[5][5]={{1,4,3,6,8},
                {2,9,0,5,7},
                {5,9,6,7,6},
                {9,0,2,6,8},
                {3,6,0,1,7}};

    int i,j,k,l,tmp,big,p;
    main(){
        for(i=0;i<=4;i++){
            for(j=0;j<=4;j++){
               for(k=j;k<=4;k++){
                    for(l=k;l<=4;l++){
                        x[k][l]=x[k][l]+1;
                    }
               }
            }
        }

    for(i=0;i<=4;i++){
        for(j=0;j<=4;j++){
            printf("%d ",x[i][j]);
        }
        printf("\n");
    }
    getch();
}
