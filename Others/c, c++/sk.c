#include<stdio.h>
int main()
{
    //t=test case , m=row ,n=column

    int m,n,t,sum,k,s,p,i,j;
    scanf("%d",&t);
    for(k=1;k<=t;k++){
        scanf("%d%d",&m,&n);

        if(m==1 || n==1){sum=m*n;printf("Case %d: %d\n",k,sum);}
        else if(m==2 || n==2){
            if(m==2){s=n;} else{s=m;}

            if(s%4==1){
                    p=s/4;
                    sum=2+4*p;
                    printf("Case %d: %d\n",k,sum);
            }
              else{p=s/5; sum=4+p*4; printf("Case %d: %d\n",k,sum);}
                            }

        else {
          sum=0;
            for(i=1;i<=m;i++){
                for(j=1;j<=n;j++){
                    if(i%2!=0&&j%2!=0 || i%2==0&&j%2==0){
                        sum=sum+1;
                    }
                }
            }
            printf("Case %d: %d\n",k,sum);
        }
    }
    return 0;
}
