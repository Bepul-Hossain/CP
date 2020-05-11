#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,i,j;      //n is Number of Elements in the Tree and i,j are Normal Integer
    cout<<"How Much Elements in your Binary Search Tree: ";
    cin>>n;

    long Tree[n+5]; //Tree is an Array for Elements of Tree
    cout<<"Enter Your Binary Search Tree in Inorder:"<<endl;
    for(i=0;i<n;i++){
        cin>>Tree[i];
    }

    cout<<"What Will You Insert: ";
    cin>>Tree[n];       //The Element What Will Be Inserted
    cout<<endl;
    n=n+1;              //Increasing Total Number of Elements

    for(i=0;i<n;i++){   //For Loop to Search and Short the Tree
        if((Tree[i]==Tree[n-1])&&(i!=n-1)){     //Check Whether the Element Already Exist
            cout<<"This Element Already Exist at Position: "<<i+1<<endl;
            n=n-1;      //If Exist Decrease Total Number of Element as no Need to Insert
        }
        for(j=i;j<n;j++){
            if(Tree[i]>Tree[j])swap(Tree[i],Tree[j]);   //If not Exist Then Short to Bring the Element at Correct Position
        }
    }

    cout<<"Inorder Traversing After Insertion:"<<endl;
    for(i=0;i<n;i++){
        cout<<Tree[i]<<" ";
    }
    cout<<endl;

    return 0;
}
