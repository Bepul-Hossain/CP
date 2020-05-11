#include<bits/stdc++.h>

using namespace std;

int main(){
	int n,sum=0;
	cout<<"Enter number of nodes:\n";
	cin>>n;
	int A[n+1][n+1],P[n+1][n+1];
	cout<<"Enter adjacency matrix:\n";
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			cin>>A[i][j];
		}
	}
	
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			if(A[i][j]==0){
				P[i][j]=0;
			}
			else{
				P[i][j]=1;
			}
		}
	}
	
	for(int l=1;l<=n;l++){
		for(int i=1;i<=n;i++){
			for(int j=1;j<=n;j++){
				//if(P[i][j] || (P[i][l] && P[l][j])){
					P[i][j]=(P[i][j] | (P[i][l] & P[l][j]));
				//}
				//else{
					//P[i][j]=0;
				//}
			}
		}
	}
	//Path MAtrix
	cout<<"Path Matrix\n";
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			cout<<P[i][j]<<" ";
		}
		cout<<endl;
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
