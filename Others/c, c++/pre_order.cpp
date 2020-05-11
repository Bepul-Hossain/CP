#include<iostream>
using namespace std;
#define max 5005

char stk[max];
int top=-1;

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
        return -1;
    }else{
        tmp=stk[top];
        top--;
        return tmp;
    }

}
int main()
{
    char c,a[500]={0};
    int i;
    while(1){
        cin>>i;
        if(i==0){
            break;
        }
        else{
            cin>>c;
            a[i]=c;
        }
    }
    push(0);
    int l,ptr=1;
    while(ptr!=0){
        cout<<a[ptr]<<"  ";
        l=2*ptr;
        if(a[l+1]!=0){
            push(l+1);
        }
        if(a[l]!=0){
            ptr=l;
        }
        else{
            ptr=pop();
        }
    }
    return 0;
}
