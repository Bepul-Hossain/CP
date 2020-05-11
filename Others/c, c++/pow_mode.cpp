#include<cstdio>
#include<iostream>

int abc(int m,int n,int c);
int main()
{ int i,j,k,m,n,c;
    scanf("%d%d%d",&m,&n,&c);
    printf("%d\n",abc(m,n,c));

    return 0;

}
int abc(int m,int n,int c){
    if (n==0) return 1;
    int r;
    r=abc(m,n/2,c);
    if(n%2==0) return (r*r)%c;
    if(n%2==1) return (r*r*m)%c;
    else{
        return abc(m,n/2,c);
    }

}
