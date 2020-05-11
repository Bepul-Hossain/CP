#include<bits/stdc++.h>
using namespace std;
int main()
{
    map <char, int> mp;
    string s="bangladesh";
    int i;
    char a;
    for(i=0; i<s.size(); i++){
        a=s[i];
    cout<<a<<endl;
        mp[a]++;
    }
    for(i=0; i<s.size(); i++){
        a=s[i];
        if(mp[a]>0){
                cout<<a<<"= ";
        cout<<mp[a]<<endl;
        mp[a]=0;
        }
    }
    return 0;
}
