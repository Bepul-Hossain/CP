#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){             //Main Function

    int m,i,j,k;
    //m is Number of Vertices or Point
    //i,j,k is normal integer to forward loop

    cout<<"Number of Vertics will be: ";
    cin>>m;
    long A[m][m],A2[m][m],A3[m][m],A4[m][m];
    //A is name of Adjacency Matrix
    //A2,A3,A4 are square,cube and quadric


    //For loop to take input the Adjacency Matrix
    cout<<"Enter the Adjacency Matrix Below in "<<m<<"x"<<m<<" size:"<<endl;
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
            cin>>A[i][j];
        }
    }


//(a)
    cout<<"Question no (a) Started:"<<endl;
    //For loop to find the adjacent of Vi or vertix which is connected with Vi
    for(i=0;i<m;i++){
        cout<<"Adjacent of V"<<i+1<<" = ";
        for(j=0;j<m;j++){
            if(A[i][j]!=0)cout<<" V"<<j+1<<" ";         //If there is any element in row
            else if(A[j][i]!=0)cout<<" V"<<j+1<<" ";    //If there is any element in column
        }
        cout<<endl;
    }
    cout<<endl;


//(b)
    cout<<"Question no (b) Started:"<<endl;
    //Finding A2 or AxA and No of path of length 2
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
                A2[i][j]=0;
            for(k=0;k<m;k++){
                A2[i][j]=A2[i][j]+A[i][k]*A[k][j];
            }
            cout<<"Number of Path of Length 4 from V"<<i+1<<" to V"<<j+1<<" is: "<<A2[i][j]<<endl;
        }
    }
    cout<<endl;


//(c)
    cout<<"Question no (c) Started:"<<endl;
    //Finding A3 or AxAxA and No of path of length 3
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
                A3[i][j]=0;
            for(k=0;k<m;k++){
                A3[i][j]=A3[i][j]+A2[i][k]*A[k][j];
            }
            cout<<"Number of Path of Length 4 from V"<<i+1<<" to V"<<j+1<<" is: "<<A3[i][j]<<endl;
        }
    }
    cout<<endl;


//(d)
    cout<<"Question no (d) Started:"<<endl;
    //Finding A4 or AxAxAxA and No of path of length 4
    for(i=0;i<m;i++){
        for(j=0;j<m;j++){
                A4[i][j]=0;
            for(k=0;k<m;k++){
                A4[i][j]=A4[i][j]+A2[i][k]*A2[k][j];
            }
            cout<<"Number of Path of Length 4 from V"<<i+1<<" to V"<<j+1<<" is: "<<A4[i][j]<<endl;
        }
    }
    cout<<endl;


    return 0;
}
