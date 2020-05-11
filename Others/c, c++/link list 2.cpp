#include<bits/stdc++.h>
using namespace std;
class node{
public:
    int r;
    node *ptr;

};
node *start=NULL;
void get_node(int value){
    if(start==NULL){
        start=new node();
        start->r=value;
        start->ptr=NULL;

    }
    else node {
        *cu_ptr=start;
        while(cu_ptr->ptr!=NULL){
        cu_ptr=cu_ptr->ptr;
        }
        node *nnode=new node();
        nnode->r=value;
        nnode->ptr=NULL;
        cu_ptr->ptr=nnode;
}
int main(){


    return 0;
}

