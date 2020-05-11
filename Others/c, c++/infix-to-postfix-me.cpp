#include<bits/stdc++.h>
using namespace std;
int prefer(char c){
    switch(c){
    case '+':
    case '-':
        return 1;
    case '*':
    case '/':
        return 2;
    case '^':
        return 3;
    case '(':
        return 0;
    }
}
int main(){
    stack<char>st;
    char s;
    char post[1000];
    int j=0;
    st.push('(');
    while(cin>>s){
        if(s=='(')
            st.push(s);
        else if(isalnum(s))
            post[j++]=s;
        else if(s==')'){
            while(st.top()!='('){
                 post[j++]=st.top();
                 st.pop();
            }
            st.pop();
        }
        else{
            while(prefer(s)<=prefer(st.top())){
                post[j++]=st.top();
                st.pop();
            }
            st.push(s);
        }

    }
    for(int i=0;i<j;i++)
        cout<<post[i];
    cout<<endl;

    return 0;
}
