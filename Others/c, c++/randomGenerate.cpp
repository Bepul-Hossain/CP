#include <bits/stdc++.h>
using namespace std;

struct node{
    int b,h;
    node *left, *right;
};

node *creat_node(int k){
    node *x = (node*)malloc(sizeof(node));
    x->b=k;
    x->h=rand();
    x->left=x->right=NULL;
    return x;
}

void split(node *T, node **L, node **R, int x){
    node *TL;
    node *TR;
    if(T == NULL){
        *L=*R=NULL;
    }
    else if(T->b<x){
        split(T->right, &TL, &TR, x);
        T->right=TL;
        *L = T;
        *R = TR;
    }
    else{
        split(T->left, &TL, &TR,x);
        T->left=TR;
        *L = TL;
        *R = T;
    }

}

void print(node *T){
    if(T==NULL) return;
    print(T->left);
    printf(" %d",T->b);
    print(T->right);
}

int main() {

    printf("Printing Tree");
    node *T = creat_node(3);
    print(T);
    node *L, *R;
    split(T, &L, &R, 4);
    printf(" Printing L ");
    print(L);
    printf(" Printing R ");
    print(R);



    //cout<<rand();

    return 0;
}
