#include<stdio.h>
#include<string.h>

int main(){
   char str[100];
   int l,i,count=0;
   gets(str);
   l=strlen(str);
   for(i=0;(i+2)<l;i++){
      if(str[i]=='0'){
         if(str[i+1]=='0'){
            if(str[i+2]=='0'){
                count++;
            }
            i=i+3;
         }
         else{
            i=i+2;
         }
      }
      else{
        i=i+1;
      }
   }
   printf("%d\n",count);

   return 0;

}
