#include<iostream>
using namespace std;
#define MAX 3
int q[4],ft=-1,rear=-1;
void push(int item){
    if((ft==0&&rear==3)||(ft==rear+1)){
        cout<<"overflow\n";
        return;
    }
    if(ft==-1){
        ft=0;
        rear=0;
    }
    else if(rear==3)
        rear=0;
    else rear++;
    q[rear]=item;
    //cout<<"f="<<ft<<endl;
    //cout<<rear<<endl;
}
int pop(){
    if(ft==-1){
        cout<<"underflow\n";
        return -1;
    }
   int item=q[ft];
    if(ft==rear){
        ft=-1;rear=-1;
    }
    else if(ft==3)
        ft=0;
    else ft++;
    return item;

}
int main(){
    cout<<pop()<<endl;
    push(10);
    cout<<pop()<<endl;
    push(12);
    push(-12);
    push(100);
    return 0;
}
