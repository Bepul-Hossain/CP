#include<stdio.h>

int main()
{
    int N=30,i;

    char array[]={'ghgygyfhggggggyg'};
    for(i=0;i<=N;i++){
        if(array[0]==array[i]){
            printf("%d\n",array[i]);
        }
    }
    return 0;
}
