#include<bits/stdc++.h>
using namespace std;
int main()
{
    int l,i;
    string s;
    getline(cin,s);
    l=s.size();
    for(i=0; i<l; i++){
        if(s[i]=='a')
        cout<<s[i]<<endl;
    }
    cout<<l;


    return 0;
}
