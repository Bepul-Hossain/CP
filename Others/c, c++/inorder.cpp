#include<iostream>
using namespace std;
#define max 1000

int stk[max];
int top=-1;
void push(int item){
    top++;
    if(top>=max){
        cout<<"overflow";
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
    int i;
    char tree[100]={0},c;
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
    int ptr=1,l;
    while(ptr!=0){
        while(tree[ptr]!=0){
            push(ptr);
            ptr=2*ptr;
        }
        while(ptr=pop()){
            if(ptr==0){
                return -1;
            }
            else{
                cout<<tree[ptr]<<"  ";
                l=2*ptr;
                if(tree[l+1]!=0){
                    ptr=l+1;
                    break;
                }
            }
        }
    }

    return 0;
}
