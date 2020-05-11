#include<bits/stdc++.h>
using namespace std;
int main()
{
    stack<string>st;
    st.push("(");
    string s,s1,s2;
    int value, sum, cal,a,b;
    while(1){
      cin>>s;
      if(s=="end") {
        break;
      }
      else if(s=="+"||s=="-"||s=="*"||s=="/"||s=="^"){
            if(s=="+"){
                s1=st.top();
                st.pop();
                s2=st.top();
                st.pop();
                stringstream ss(s1);
                ss>>a;
                stringstream ss2(s2);
                ss2>>b;
                value=a+b;
                ostringstream ss1;
                ss1<<value;
                s2=ss1.str();
                st.push(s2);

            }
      }
      else
      st.push(s);
    }
    cout<<st.top()<<endl;


    return 0;
}
