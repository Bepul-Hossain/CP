#include <iostream>
using namespace std;
#define max 1000

int stack[max],top=-1;

void push(int item){
    top++;
    if(top>=max){
        cout<<"overflow "<<endl;
        return;
    }
    else{
        stack[top]=item;
    }
}

void pop(){
    if(top<0){
        cout<<"underflow "<<endl;
    }
    else{
       top--;
    }
}

int peek(){
    if(top<0){
        cout<<"stack is empty"<<endl;
        return NULL;
    }
    else{
       cout<< stack[top]<<endl;
    }
}
int main()
{
    int item[39],i,n;
    cout<<"enter the number of push item"<<endl;
    cin>>n;
    for(i=0; i<n; i++) {
        cin>>item[i];
        push(item[i]);
    }
    pop();
    peek();
    pop();
    peek();

    return 0;
}
