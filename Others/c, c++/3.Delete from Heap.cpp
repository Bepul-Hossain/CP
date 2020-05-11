#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,i,m;          //n is no of elements,i is normal integer and m is used to save i
    cout<<"How Much Elements are in Your Heap: ";
    cin>>n;

    long H[n+5],Delete;        //H is Array to take input the elements of heap
    cout<<"Enter All Elements of Heap in Sequential Representation:"<<endl;
    for(i=1;i<=n;i++){
        cin>>H[i];
    }
    cout<<endl;

    cout<<"Before Deletion:"<<endl;
    for(i=1;i<=n;i++){
        cout<<H[i]<<" ";
    }
    cout<<endl<<endl;

    cout<<"What will you Delete Now: ";
    cin>>Delete;                //Delete will be deleted from the heap
    cout<<endl;

    for(i=1;i<=n;i++)if(H[i]==Delete){      //For loop to take last element at deleted position
        m=i;
        H[i]=H[n];
    }

    for(i=m;i<n;i){                         //For loop to bring the last element at exact position
        if(H[2*i]>H[(2*i)+1]&&H[2*i]>H[i]){
            swap(H[i],H[2*i]);
            i=2*i;
        }
        else if(H[2*i]<H[(2*i)+1]&&H[(2*i)+1]>H[i]){
            swap(H[i],H[(2*i)+1]);
            i=(2*i)+1;
        }
        else break;
    }
    n=n-1;              //Decreasing Number of element or deleting last element

    cout<<"After Deletion:"<<endl;
    for(i=1;i<=n;i++){
        cout<<H[i]<<" ";
    }
    cout<<endl;
    return 0;
}
