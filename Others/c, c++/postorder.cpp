#include<iostream>
using namespace std;
#define max 50005

char stk[max];
int top=-1;

void push(int item){
    top++;
    if(top==max){
        cout<<"overflow";
        return;
    }
    stk[top]=item;
}
int pop(){
    int tmp;
    if(top==-1){
        cout<<"underflow";
        return -1;
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
    char c,a[1000]={0};
    while(1){
        cin>>i;
        if(i==0){
            break;
        }else{
            cin>>c;
            a[i]=c;
        }
    }
    push(0);
    int ptr=1, r;
    while(ptr!=0){
            while(a[ptr]!=0){
                push(ptr);
                ptr=2*ptr;
                r=ptr+1;
                if(a[r]!=0){
                    push(-r);
                }
            }
            while(ptr=pop()){

                if(ptr==0){
                    return -1;
                }
                else if(ptr>0){
                    cout<<a[ptr]<<"  ";
                }else{
                    ptr=-ptr;
                    break;
                }
            }
    }
    return 0;
}
/*
1 A
2 B
3 C
4 D
5 E
11 G
22 H
7 F
0
*/

