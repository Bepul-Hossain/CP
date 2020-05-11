#include<iostream>
#define infinite 100000
using namespace std;
int main()
{
	int w[10][10],q[10][10],k,i,j,n;
	cout<<"n = ";
	cin>>n;
	for(i=1; i<=n; i++){
		for(j=1; j<=n; j++){
			cin>>w[i][j];
			if(w[i][j]==0){
             q[i][j]=infinite;
             }
            else{
             q[i][j]=w[i][j];
             }
		}
	}

	for(k=1; k<=n; k++){
        for(i=1; i<=n; i++){
            for(j=1; j<=n; j++){
                q[i][j]=min(q[i][j],q[i][k]+q[k][j]);
            }
        }
	}
	cout<<"Path Matrix\n";
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			cout<<q[i][j]<<" ";
		}
		cout<<endl;
	}
    return 0;
}
/* input
4
1 0 2 0
4 2 4 3
0 1 0 0
3 4 2 6

output
Path Matrix
1 3 2 6
4 2 4 3
5 1 5 4
3 3 2 6
*/
