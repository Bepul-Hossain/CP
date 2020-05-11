#include<stdio.h>
#include<string.h>

struct nametype{
    int id;
    char first[20];
    char last[20];
    };

main()
{

    struct nametype one;

     scanf("%d",&one.id);
     scanf("%s",&one.first);
     scanf("%s",one.last);

    printf("id:%d\n",one.id);
    printf("name:%s %s\n",one.first,one.last);

    return 0;
}
