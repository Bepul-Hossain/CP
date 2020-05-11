#include<stdio.h>
int main()
{
    int i;
    char name[3][10];
    for(i=0;i<3;i++){
    scanf("%s",name[i]);

    }
    for(i=0;i<3;i++){
        printf("%s\n",name[i]);
    }
    return 0;
}
