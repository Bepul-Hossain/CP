#include<iostream>
#include<bits/stdc++.h>
using namespace std;


struct node                     //Structure Node with Left and Right Child
{
     int data;
     struct node* left;
     struct node* right;
};


struct node* newNode(int data)  //Function to Create a New Node
{
    struct node* node = (struct node*)
    malloc(sizeof(struct node));
    node->data = data;          //New Node
    node->left = NULL;
    node->right = NULL;

    return(node);
}


void printPreorder(struct node* node)//Prints Tree in Preorder
{
     if (node == NULL)return;       //Finishing the Last Node of a Part
     cout<<node->data<<" ";         //Fist Print the Node
     printPreorder(node->left);     //Recursion for Left Subtree
     printPreorder(node->right);    //Recursion for Right Subtree
}

//Main Function to Create Tree and Call Other Functions
int main()
{
     struct node *root  = newNode(1);
     root->left         = newNode(2);
     root->right        = newNode(3);
     root->left->left   = newNode(4);
     root->left->right  = newNode(5);

     cout<<"Preorder Traversal of Binary Tree is:"<<endl;
     printPreorder(root);
     cout<<endl;

     return 0;
}
