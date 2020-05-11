#include<iostream>
#include<bits/stdc++.h>
using namespace std;


//Function MIN to find minimum value between two value
long MIN(long a,long b){
    if(a<b)return a;
    else return b;
}


int main(){             //Main Function

    int m,i,j,k;
    //m is Number of Vertices or Point
    //i,j,k is normal integer to forward loop

    cout<<"Number of Vertics will be: ";
    cin>>m;
    long W[m][m],Q0[m][m],INF=1000000000;
    //W is name of Adjacency Matrix which will take input the edges
    //Q0 is the equivalent Matrix of W
    //INF is a large number which works as infinity


    //For loop to take input the Adjacency Matrix of weight of edges
    cout<<"Enter the Weights Below in Adjacency Matrix Format in "<<m<<"x"<<m<<" size:"<<endl;
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
            cin>>W[i][j];
        }
    }
    cout<<endl;


    //Finding Q0
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
            if(W[i][j]==0)Q0[i][j]=INF;
            else Q0[i][j]=W[i][j];
        }
    }



    //Finding Shortest Path
    for(k=0;k<m;k++){
        for(i=0;i<m;i++){
            for(j=0;j<m;j++){
                Q0[i][j]=MIN(Q0[i][j],Q0[i][k]+Q0[k][j]);
            }
        }
    }


    //Printing Shortest Path
    cout<<"Shortest Paths:"<<endl;
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
            cout<<Q0[i][j]<<" ";
        }
        cout<<endl;
    }
    cout<<endl;


    return 0;
}
