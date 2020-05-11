#include<iostream>
using namespace std;
#define max 1000

int stk[max],top=-1;

void push(int item){
    top++;
    if(top>=max){
        cout<<"overflow";
        return;
    }
    else{
        stk[top]=item;
    }
}
int pop(){
    int tmp;
    if(top<=-1){
        cout<<"underflow";
    }
    else{
        tmp=stk[top];
        top--;
        return tmp;
    }
}
int main()
{
    char tree[1000]={0},c;
    int i;
    while(1){
            cin>>i;
            if(i==0){
                break;
            }
            else{
                cin>>c;
                tree[i]=c;
            }
    }
    push(0);
    int l,ptr=1,r;
    while(ptr!=0){
        while(tree[ptr]!=0){
           push(ptr);
           ptr=ptr*2;
           r=ptr+1;
           if(tree[r]!=0){
            push(-r);
           }
        }
        while(ptr=pop()){
            if(ptr==0){
                return 0;
            }
            else if(ptr>0){
                cout<<tree[ptr]<<"  ";
            }
            else{
                ptr=-ptr;
                break;
            }
        }
    }

    return 0;
}
