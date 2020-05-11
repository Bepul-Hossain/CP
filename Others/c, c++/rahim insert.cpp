#include<bits/stdc++.h>
using namespace std;
int main()
{
    string s[20],s1;
    int i,n;
    cin>>n;
    for(i=0; i<n; i++){
        cin>>s[i];
    }
    cout<<"enter  name\n";
    cin>>s1;
    for(i=n-1; i>=0; i--){
        //cout<<"s1"<<s[i]<<endl;
        //cout<<"i+1"<<s[i+1]<<endl;
        if(s[i]>s1){
            s[i+1]=s[i];
        }
        else{
            break;
        }
    }
    //cout<<i<<endl;
    s[i+1]=s1;
    for(i=0;i<=n;i++){
        cout<<s[i]<<endl;
    }
    return 0;
}
