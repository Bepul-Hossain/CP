#include<iostream>

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
	int p;
	for(int i=67;i<86;i++){
		p=i;
		push(p);
	}
	for(int i=0;i<10;i++){
		cout<<pop()<<"  ";
	}
	return 0;
}

