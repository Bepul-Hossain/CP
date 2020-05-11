#include<iostream>
#include<bits/stdc++.h>

using namespace std;
//infix to postfix function
char t,stkk[100];
int topp=-1,mxx=99;
void push(char n){
	if(topp==mxx){
		cout<<"stack Overflow\n";
	}
	else{
		topp++;
		stkk[topp]=n;
	}
}
char popp(){
	if(topp==-1){
		cout<<"stack Underflow\n";
	}
	else{
		t=stkk[topp];
		topp--;
		return t;
	}
}
bool isoperator(char c){
    if(c=='+'||c=='-'||c=='*'||c=='/'||c=='^')
		return true;
    return false;
}
int priority(char a) {
     int temp;
     if(a=='^')
         temp = 1;
     if(a=='*'|| a=='/')
         temp = 2;
     if(a=='+' || a=='-')
        temp = 3;
     return temp;
}

//Postfix Evaluate function
int tt,stk[100];
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
		tt=stk[top];
		top--;
		return tt;
	}
}
/*
bool isoperator(char c){
    if(c=='+'||c=='-'||c=='*'||c=='/'||c=='^')
		return true;
    return false;
}
*/
void emp(char *st){
    for(int i=0;i<10;i++){
        st[i]=0;
    }
}




int main(){
    int l,a,b,c,tmp;    //postfix evaluate
	char str[10];      //postfix evaluate
    string infix;
    char postfix[100];
    cout<<"Give a infix expression:"<<endl;
    cin>>infix;
    infix[infix.size()]=')';
    push('(');
    int j=0;
    for(int i=0;i<=infix.size();i++){
        if(isdigit(infix[i])){
            while(isdigit(infix[i])){
                postfix[j]=infix[i];
                j++;
                i++;
            }
            i--;
            postfix[j]=',';
            j++;
        }
        if(isoperator(infix[i])){
            if(stkk[topp]=='('){
                push(infix[i]);
            }
            else{
                while(stkk[topp]!='(' && priority(stkk[topp])<=priority(infix[i])){
                    postfix[j]=popp();
                    j++;
                    postfix[j]=',';
                    j++;
                }
                push(infix[i]);
            }
        }
        if(infix[i]=='('){
            push(infix[i]);
        }
        if(infix[i]==')'){
            while(stkk[topp]!='('){
                    postfix[j]=popp();
                    j++;
                    postfix[j]=',';
                    j++;
            }
            if(stkk[topp]=='(')
                popp();
        }
    }
    cout<<"Postfix form:"<<endl;
    for(int i=0;i<j-1;i++){
        cout<<postfix[i];
    }
    cout<<endl;
    l=j-1;
    postfix[l]=')';
    for(int i=0;i<=l;i++){
        if(isdigit(postfix[i])){
            int j=0;
            while(isdigit(postfix[i])){
                str[j]=postfix[i];
                i++;
                j++;
            }
            i--;
            tmp=atoi(str);
            push(tmp);
            emp(str);
        }
        if(isoperator(postfix[i])){
            a=pop();
			b=pop();
			if(postfix[i]=='+')
				c=b+a;
			else if(postfix[i]=='-')
				c=b-a;
			else if(postfix[i]=='*')
				c=b*a;
			else if(postfix[i]=='/')
				c=b/a;
			else
				c=pow(b,a);

			push(c);
        }
	}
	cout<<"The result is:"<<pop()<<endl;

    return 0;
}
