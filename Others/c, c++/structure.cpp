// C++ program to construct a Binary Tree from parent array
#include<bits/stdc++.h>
using namespace std;

struct node
{
	int data;
	struct node *left;
	struct node *right;
};

struct node* newNode(int data)
{
    struct node *n = new node();
    n->data = data;
    n->left = NULL;
    n->right = NULL;
    return(n);
}

int main()
{
    struct node* root = newNode(1);
    cout<<root<<endl;
    root->left	 = newNode(2);
    root->right	 = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(4);
    getchar();
    return 0;
}
