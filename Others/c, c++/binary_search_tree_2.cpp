#include<iostream>
using namespace std;
int main()
{
    int i, tree[100]={0},c;
    while(1){
            cin>>i>>c;
        if(i==0 && c==0){
            break;
        }
        else{
            tree[i]=c;
        }
    }
    int item,ptr=1;
    cout<<"enter search number ";
    cin>>item;
    if(tree[1]==0){
        ptr=0;
    }
    else{
        while(tree[ptr]!=0){
            if(tree[ptr]==item){
                cout<<"location "<<ptr;
                return -1;
            }
            else if(tree[ptr]<item){
                ptr=ptr*2+1;
            }
            else{
                ptr=2*ptr;
            }
        }
        tree[ptr]=item;
        cout<<"item not found\ninsert item location is "<<ptr;
    }
    return 0;
}
