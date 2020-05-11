#include<iostream>
using namespace std;
int main()
{
    string s[20],temp;
    int i,j,n;
    cout<<"Number of string data n = ";
    cin>>n;
    for(i=0; i<n; i++){
        cin>>s[i];
    }
    for(i=0; i<n; i++){
        for(j=i+1; j<n; j++){
            if(s[i]>s[j]){
                temp=s[i];
                s[i]=s[j];
                s[j]=temp;
            }
        }
    }
    for(i=0; i<n; i++){
        cout<<s[i]<<endl;
    }


    return 0;
}
