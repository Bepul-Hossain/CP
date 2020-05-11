#include<bits/stdc++.h>
using namespace std;
double operation(int a,int b,char ch){
    switch(ch){
        case '+':return a+b;
        case '-':return a-b;
        case '*':return a*b;
        case '/':return a/b;
        case '^':return pow(a,b);
    }
}
int main(){
    stack<string>st;
    string s,s1,s2;
    double a,b,c;
    char ch;
    while(cin>>s){
        if(s=="+"||s=="-"||s=="*"||s=="/"||s=="^"){
            s1=st.top();
            st.pop();
            s2=st.top();
            st.top();
            stringstream ss(s1);
            ss>>a;
            stringstream ss2(s2);
            ss2>>b;
            ch=s[0];
            //cout<<a<<endl;
            //cout<<b<<endl;
           c= operation(b,a,ch);
           //cout<<c<<endl;
           ostringstream ss1;
           ss1<<c;
           s2=ss1.str();
           st.push(s2);
        }
       else st.push(s);
    }
    cout<<st.top()<<endl;
    return 0;
}
