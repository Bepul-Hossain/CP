#include<stdio.h>
int main(){
    char *p;
    char a='b',b='h';
    p=&a;
    printf("%d\n",p);
    p=&b;
    printf("%d\n",p);
    p=&a;
    printf("%d\n",p-1);
    return 0;
}
