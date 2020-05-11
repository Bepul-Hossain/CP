#include<stdio.h>

int main()
{
    int i;
    int t[]={56,94,65,89,65,56};
    int m[101];
    for(i=0;i<101;i++){
        m[i]=0;
    }
    for(i=0;i<40;i++){
        m[t[i]]++;
    }
    for(i=50;i<101;i++){
        printf("%d %d\n",i,m[i]);

    }
    return 0;
}
