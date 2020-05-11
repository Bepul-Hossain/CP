#include<stdio.h>
#include<string.h>

int main(){
        char text[100], search[15], replace[15];
        int i,j,k,l1,l2,s,a;

        printf("Please Input a Text:\n");
        gets(text);     //Input Text

        printf("You Have Entered:\n");
        puts(text);     //Print The Text That have Been Entered

        printf("Enter a Word for replace:\n");
        gets(search);
        printf("Enter a Word replace with:\n");
        gets(replace);
        l1=strlen(text);
        l2=strlen(search);
        for(i=0;i<l1;i++){
            if(text[i]==search[0]){
                s=i;
                a=0;
                for(j=0;j<l2;j++){
                    if(text[i]==search[j]){
                        a++;
                        i++;
                    }
                    else
                        break;
                }
                i=s;
                j=0;
                if(a==l2)
                    for(k=s;k<s+l2;k++){
                       text[k]=replace[j];
                       j++;
                    }

            }
        }
        puts(text);


        return 0;
}
