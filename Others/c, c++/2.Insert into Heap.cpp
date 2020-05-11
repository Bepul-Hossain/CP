#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,i,m;          //n is no of elements,i is normal integer and m is used to not change n
    cout<<"How Much Elements are in Your Heap: ";
    cin>>n;

    long H[n+5];        //H is Array to take input the elements of heap
    cout<<"Enter All Elements of Heap in Sequential Representation:"<<endl;
    for(i=1;i<=n;i++){
        cin>>H[i];
    }
    cout<<endl;

    cout<<"Before Insertion:"<<endl;
    for(i=1;i<=n;i++){
        cout<<H[i]<<" ";
    }
    cout<<endl<<endl;

    cout<<"What will you Insert Now: ";
    cin>>H[n+1];                //Inserting new element at the last of heap tree
    cout<<endl;
    m=n=n+1;                    //Increasing total element number in heap

    while(H[m]>H[m/2]){         //Taking in exact position the inserted element
        swap(H[m],H[m/2]);
        m=m/2;
    }

    cout<<"After Insertion:"<<endl;
    for(i=1;i<=n;i++){
        cout<<H[i]<<" ";
    }
    cout<<endl;
    return 0;
}
