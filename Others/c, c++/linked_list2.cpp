#include<bits/stdc++.h>
using namespace std;
struct node{
    int n;
    node *next;
};
node *roo=NULL;
void append(int n){
    if(roo==NULL){
        roo=new node();
        roo->n=n;
        roo->next=NULL;
    }
    else{
        node *current_node=roo;
        while(current_node->next!=NULL){
            current_node=current_node->next;
        }
        node *newnode=new node();
        newnode->n=n;
        newnode->next=NULL;
        current_node->next=newnode;
    }
}
void print(){
    node *current_node=roo;
    while(current_node!=NULL){
        printf("%d\n",current_node->n);
        printf("%d\n",current_node->next);
        current_node=current_node->next;
    }
}
int main()
{
    int i,p,q;
    cin>>p;
    for(i=1; i<=p; i++){
            cin>>q;
        append(q);
    }
    print();
    return 0;
}
