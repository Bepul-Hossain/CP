#include<iostream>
using namespace std;
int main()
{
	int a[10][10][10],l,k,i,j,n,c=0,x,y;
	cout<<"n = ";
	cin>>n;
	for(i=1; i<=n; i++){
		for(j=1; j<=n; j++){
			cin>>a[1][i][j];
		}
	}
	for(l=2; l<=n; l++){
		for(i=1; i<=n; i++){
		    for(j=1; j<=n; j++){
		         for(k=1; k<=n; k++){
				c=c+a[l-1][i][k]*a[1][k][j];
		       }
			   a[l][i][j]=c;
			   c=0;
		    }
		}
	  }
	  cout<<"enter paths length"<<endl;
	  int lenght;
	  cin>>lenght;
	  for(i=1; i<=n; i++){
        for(j=1; j<=n; j++){
            cout<<a[lenght][i][j]<<"  ";
        }
        cout<<endl;
	  }
	  cout<<"enter char name vi and vj";
	  char vi,vj;
	  cin>>vi>>vj;
	  x=vi-64;
	  y=vj-64;
	  cout<<a[lenght][x][y];

	return 0;
}
/*
n = 4
1 0 1 0
0 1 1 1
1 0 0 0
1 1 1 1
enter paths length
3
3  0  2  0
6  4  6  4
2  0  1  0
8  4  7  4
enter char name vi and vj D C
(output) 7
*/
