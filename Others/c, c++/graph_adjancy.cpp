//By Arup

#include<bits/stdc++.h>

using namespace std;

int main(){
	int n,sum=0;
	cout<<"Enter number of nodes:\n";
	cin>>n;
	int A[n+1][n+1][n+1];
	cout<<"Enter adjacency matrix:\n";
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			cin>>A[1][i][j];
		}
	}
	//operation a
	for(int l=2;l<=n;l++){
		for(int i=1;i<=n;i++){
			for(int j=1;j<=n;j++){
				for(int k=1;k<=n;k++){
					sum=sum+A[l-1][i][k]*A[1][k][j];
				}
				A[l][i][j]=sum;
				sum=0;
			}
		}
	}
	int B[n+1][n+1],P[n+1][n+1];
	//Storngly connected or not

	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			for(int l=1;l<=n;l++){
				sum=sum+A[l][i][j];
			}
			B[i][j]=sum;
			sum=0;
		}
	}
	//Path Matrix
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			if(B[i][j]==0){
				P[i][j]=0;
			}
			else{
				P[i][j]=1;
			}
		}
	}


	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			if(P[i][j]==0){
				cout<<"Not Strongly Connected\n";
				return 2;

			}
		}
	}
	cout<<"Strongly Connected\n";

	return 0;
}
