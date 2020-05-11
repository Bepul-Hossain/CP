#include<iostream>
using namespace std;
#define MAX 1200
int i, stack[MAX],top=-1;
void push(int item){
    top++;
    if(top==MAX){
        cout<<"overflow\n";
        return;
    }
    stack[top]=item;

}
void pop(){
    if(top==-1){
        cout<<"underflow\n";
        return;
    }
    top--;

}
int peek(){
    if(top==-1){
        cout<<"stack is empty ";
        return 0;
    }

    return stack[top];
}
int main(){
    int n,item[20];
    cout<<"enter total push/insert number = ";
    cin>>n;
    for( i=0; i<n; i++){
        cin>>item[i];
        push(item[i]);
    }
    cout<<"peek/top value = "<<peek()<<endl;
    cout<<"enter total delete/pop number = ";
    int m;
    cin>>m;
    for(i=0; i<m; i++){
        pop();
    }
    cout<<peek()<<endl;
    return 0;
}

