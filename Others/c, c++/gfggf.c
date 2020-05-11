#include<stdio.h>
#include<string.h>

int main()
{
    int i,n,j,l_a,count=0;
    char a[500];
    scanf("%d\n",&n);
    for(i=0;i<n;i++){
        scanf("%c",&a[i]);
    }
    for(i=0;i<n-1;i++){
        if(a[i]=='0'&&a[i+1]=='0'&&a[i+2]=='0'){
            count=count+1;
            i=i+2;
            }
    }
    printf("%d\n",count);

    return 0;
}

