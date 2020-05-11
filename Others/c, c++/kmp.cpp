///KMP

char s1[100009],key[100009];
int lps[100009],lk=0,l1,l2;
void clps(char *key,int ln)
{
    int i=1,j=0;
    while(i<ln){
        if(key[i]==key[j]){
            j++;
            lps[i]= j;
            i++;
        }
        else {
            if(j)j=lps[j-1];
            else lps[i++]=0;
        }
    }
}

int src(char *txt,char *key){
int i=0,j=0;
    while(txt[i]){
        if(txt[i]==key[j]){
            j++;
            i++;
            if(j==lk){
                return i-j;
                //j=lps[j-1];
            }
        }
        else{
            if(j)j=lps[j-1];
            else i++;
        }
    }
    return -1;
}


