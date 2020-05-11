#include<bits/stdc++.h>
using namespace std;
class node{
public:
    int n;
    node *next;
};
node *root=NULL;
void append(int n)
{
    if(root==NULL){
       root=new node();
       root->n=n;
       root->next=NULL;
    }
    else{
        node *current_node=root;
        while(current_node->next!=NULL){
            current_node=current_node->next;
        }
        node *newnode=new node();
        newnode->n=n;
        newnode->next=NULL;
        current_node->next=newnode;
    }
}
void print()
{
    node *current_node=root;
    while(current_node!=NULL){
       cout<<current_node->n<<endl;
       current_node=current_node->next;
    }
}
int main()
{
    append(5);
    append(8);
    print();
    return 0;
}
