#include<iostream>
#include<bits/stdc++.h>

using namespace std;

int t,stk[100];
int top=-1,mx=99;
void push(int n){
	if(top==mx){
		cout<<"stack Overflow\n";
	}
	else{
		top++;
		stk[top]=n;
	}
}
int pop(){
	if(top==-1){
		cout<<"stack Underflow\n";
	}
	else{
		t=stk[top];
		top--;
		return t;
	}
}

bool isoperator(char c){
    if(c=='+'||c=='-'||c=='*'||c=='/'||c=='^')
		return true;
    return false;
}
void emp(char *st){
    for(int i=0;i<10;i++){
        st[i]=NULL;
    }
}

int main(){
    int l,a,b,c,tmp;
	char str[10];
	string s;
	cin>>s;

	l=s.size();
	s[l]=')';

    for(int i=0;i<=l;i++){
        if(isdigit(s[i])){
            int j=0;
            while(isdigit(s[i])){
                str[j]=s[i];
                i++;
                j++;
            }
            i--;
            tmp=atoi(str);
            push(tmp);
            emp(str);
        }
        if(isoperator(s[i])){
            a=pop();
			b=pop();
			if(s[i]=='+')
				c=b+a;
			else if(s[i]=='-')
				c=b-a;
			else if(s[i]=='*')
				c=b*a;
			else if(s[i]=='/')
				c=b/a;
			else
				c=pow(b,a);

			push(c);
        }
	}
	cout<<"The result is:"<<pop()<<endl;
}
