#include<iostream>
using namespace std;
#define max 1000

int top=-1,stack[max];

void push(int item){
    top++;
    if(top>=max){
        cout<<"overflow"<<endl;
        return;
    }
    else{
       stack[top];
    }
}
void pop(){
    if(top<=-1){
        cout<<"under"<<endl;
    }
    else{
        top--;
    }
}
int peek(){
    if(top<=-1){
        cout<<"empty"<<endl;
    }
    else{
        cout<<stack[top];
    }
}
int main()
{
    int item[20],n,i;
    cin>>n;
    for(i=0; i<n; i++){
        cin>>item[i];
        push(item[i]);
    }
    pop();
    peek();

    return 0;
}
