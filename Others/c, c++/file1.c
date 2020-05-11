#include<stdio.h>
#include<stdlib.h>


int main()
{
    FILE *fp1,*fp2,*fp3;

    fp1= fopen("main file.txt","r");
    if(fp1 == NULL)
   {
      printf("Error!");
      exit(1);
   }
    fp2=fopen("vowel's file.txt","w");
    fp3=fopen("consonent's file.txt","w");

    char s[1000];

    while(fscanf(fp1,"%s",s)==1)
    {
        if(s[0]=='A'||s[0]=='E'||s[0]=='I'||s[0]=='O'||s[0]=='U'||s[0]=='a'||s[0]=='e'||s[0]=='i'||s[0]=='o'||s[0]=='u')
        {
            fprintf(fp2,"%s ",s);
        }

        else
        {
            fprintf(fp3,"%s ",s);
        }


    }
    close(fp1);
    close(fp2);
    close(fp3);


   return 0;
}

