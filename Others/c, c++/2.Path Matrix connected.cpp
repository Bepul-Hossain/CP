#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){             //Main Function

    int m,i,j,k,counter=0;
    //m is Number of Vertices or Point
    //i,j,k is normal integer to forward loop
    //counter is an integer which will count the number of zero in path matrix

    cout<<"Number of Vertics will be: ";
    cin>>m;
    long A[m][m],A2[m][m],A3[m][m],A4[m][m],B4[m][m],P[m][m];
    //A is name of Adjacency Matrix
    //A2,A3,A4 are square,cube and quadric
    //B4 are the sum of matrices from A to A4


    //For loop to take input the Adjacency Matrix
    cout<<"Enter the Adjacency Matrix Below in "<<m<<"x"<<m<<" size:"<<endl;
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
            cin>>A[i][j];
        }
    }
    cout<<endl;


    //Finding A2 or AxA
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
                A2[i][j]=0;
            for(k=0;k<m;k++){
                A2[i][j]=A2[i][j]+A[i][k]*A[k][j];
            }
        }
    }


    //Finding A3 or AxAxA
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
                A3[i][j]=0;
            for(k=0;k<m;k++){
                A3[i][j]=A3[i][j]+A2[i][k]*A[k][j];
            }
        }
    }


    //Finding A4 or AxAxAxA
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
                A4[i][j]=0;
            for(k=0;k<m;k++){
                A4[i][j]=A4[i][j]+A2[i][k]*A2[k][j];
            }
        }
    }


    //Finding B4 or A+A2+A3+A4 and printing B4
    cout<<"Br :"<<endl;
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
            B4[i][j]=A[i][j]+A2[i][j]+A3[i][j]+A4[i][j];
            if(B4[i][j]!=0)P[i][j]=1;       //Finding path matrix and checking zero in path matrix
            else{
                P[i][j]=0;
                counter++;
            }
            cout<<B4[i][j]<<" ";
        }
        cout<<endl;
    }
    cout<<endl;


    //Printing Path Matrix
    cout<<"Path Matrix :"<<endl;
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
            cout<<P[i][j]<<" ";
        }
        cout<<endl;
    }
    cout<<endl;


    //Checking if strongly connecting or not from checking counter from line 68-71
    if(counter!=0)cout<<"This is not Strongly Connected."<<endl;
    else cout<<"This is Strongly Connected."<<endl;
    cout<<endl;


    return 0;
}

