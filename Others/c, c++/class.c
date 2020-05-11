#include<stdio.h>
#include<conio.h>
struct student{
    char name[20][50];
    char phone[50];
}dt;
int main()
{
   while(1){
    int i,n;
    FILE *fr;
    printf("Enter last 2 digit of Roll:\n");
    printf("Enter 0 to exit\n");
    scanf("%d",&n);
    if(n==0){
	break;
   }
    fr=(fopen("student1styear.txt","r"));
    for(i=1;i<=48;i++){
        fscanf(fr," %[^\n]",dt.name);
        fscanf(fr,"%s",dt.phone);
        if(i==n)
            printf("\tName: %s\n\tPhone: %s\n",dt.name,dt.phone);
    }
    fclose(fr);
    getch();
   }
   return 0;
}
