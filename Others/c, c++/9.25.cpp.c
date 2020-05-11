#include<stdio.h>
#include<math.h>

int  main()
{
    int n,i,t,j,p,c,count=0;
    scanf("%d",&n);

    for(j=1; j<=n; j++){
        scanf("%d",&p);
        t=sqrt(p);
        c=0;
        for(i=2; i<=t; i++){
            if(p%i==0){
                c=c+1;
                c=1;
                break;

            }
        }
        if(c==1){
                count=count+1;

            printf("%d Not prime\n",p);
        }
        else{
            printf("%d prime\n",p);
        }

    }  printf("count=%d\n",count);

    return 0;
}
