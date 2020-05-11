#include<iostream>
#include<bits/stdc++.h>

using namespace std;

struct node{
	int info;
	struct node *next;
};
typedef struct node *nodeptr;

nodeptr getnode(void);
nodeptr insertnode(nodeptr ptr,int value);


int main(){
	int value;
	nodeptr ptr,start;
	start=getnode();
	ptr=start;
	cout<<"Enter a Negetive Number to Terminate:\n";
	do{
		cin>>value;
		if(value>=0){
			ptr=insertnode(ptr,value);
		}
	}while(value>=0);
	ptr->next=0;
	
	//Output
	
	ptr=start->next;
	while(ptr!=0){\
		cout<<ptr->info<<" ";
		ptr=ptr->next;
	}
	
	return 0;
}


nodeptr getnode(void){
	nodeptr p;
	p=(nodeptr)malloc(sizeof(struct node));
	return p;
}
nodeptr insertnode(nodeptr ptr, int value){
	nodeptr q;
	q=getnode();
	q->info=value;
	ptr->next=q;
	return q;
}
