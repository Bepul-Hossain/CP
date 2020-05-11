#include <bits/stdc++.h>
using namespace std;

int main() {


    int n;
    cin>>n;
    string s;

    for(int i = 0; i<n; i++){
        cin>>s;
        int len;
        len = s.size();
        if(len%2==1){
            cout<<"NO"<<endl;
        }
        else{
            stack<char>stk;
            bool flag=false;
            for(int i=0; i<len; i++){

                if(s[i]=='(' || s[i]=='{' || s[i]=='['){
                    stk.push(s[i]);
                    }
                else if(!stk.empty() && s[i]==')' && stk.top()=='(' ){
                        stk.pop();
                }
                else if(!stk.empty() && s[i]=='}' && stk.top()=='{' ){
                        stk.pop();
                }
                else if (!stk.empty() && s[i]==']' && stk.top()=='[' ){
                        stk.pop();
                }

                else{
                    cout<<"NO"<<endl;
                    flag=true;
                    break;
                }
            }
            if(!flag){
                if(stk.empty()) cout<<"YES"<<endl;
                else cout<<"NO"<<endl;
            }

        }
    }

    return 0;
}
