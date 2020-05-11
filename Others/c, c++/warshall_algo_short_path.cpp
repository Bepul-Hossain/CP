#include<bits/stdc++.h>

using namespace std;

int main(){
	int n,sum=0;
	cout<<"Enter number of nodes:\n";
	cin>>n;
	int W[n+1][n+1],Q[n+1][n+1];
	cout<<"Enter Weighted adjacency matrix:\n";
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			cin>>W[i][j];
		}
	}
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			if(W[i][j]==0){
				Q[i][j]=6500000;
			}
			else{
				Q[i][j]=W[i][j];
			}
		}
	}
	for(int l=1;l<=n;l++){
		for(int i=1;i<=n;i++){
			for(int j=1;j<=n;j++){
					Q[i][j]=min(Q[i][j],(Q[i][l] + Q[l][j]));
			}
		}
	}
	cout<<"Path Matrix\n";
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			cout<<Q[i][j]<<" ";
		}
		cout<<endl;
	}
	return 0;
}
