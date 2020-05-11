#include<iostream>

using namespace std;
int stk[20],top=-1;
void push(int n){
	top++;
	stk[top]=n;
}
int  pop(){
	int t;
	t=stk[top];
	top--;
	return t;
}

int main(){
	int tree[100]={0},i,value;
	
	while(1){
		cin>>i>>value;
		if(i==0 && value==0)
			break;
		tree[i]=value;
	}
	
	for(i=1;i<100;i++){
		if(tree[i]!=0){
		cout<<"Position:"<<i<<" Value:"<<tree[i]<<endl;
		}
	}
	
//preorder Traverse
	int ptr=1,l;
	push(0);
	cout<<"Preorder Traversing:";
	while(ptr!=0){
		cout<<tree[ptr]<<"  ";
		l=2*ptr;
		if(tree[l+1]!=0){
			push(l+1);
		}
		if(tree[l]!=0){
			ptr=l;
		}
		else{
			ptr=pop();
		}
	}
	cout<<endl;
//Inorder Traverse
/*
	ptr=1;
	push(0);
	cout<<"Inorder Traversing:";
	while(ptr!=0){
		while(tree[ptr]!=0){
			push(ptr);
			ptr=2*ptr;
		}Untitled Folder
		ptr=pop();
		if(ptr!=0){
			cout<<tree[ptr]<<"  ";
			l=2*ptr;
		}
		if(tree[l+1]!=0){
				ptr=l+1;
		}
	}


*/
	return 0;
}
/*
1 10
2 5
4 9
8 7
17 5
5 3
10 2
11 1
3 4
6 8
7 4
15 15
0 0
*/
