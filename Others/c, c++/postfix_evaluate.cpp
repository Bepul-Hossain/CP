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
int main(){
	int l,a,b,c,tmp;
	string s;
	cin>>s;
	l=s.size();
	s[l]=')';
	int i=0;
	while(s[i]!=')'){
		if(isdigit(s[i])){
			push(s[i]-'0');
		}
		else{
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
		i++;
	}
	cout<<pop()<<endl;
	
	return 0;
}

