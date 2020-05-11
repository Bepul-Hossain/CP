#include<iostream>
using namespace std;
int main()
{
	int a[10][10][10],l,k,i,j,n,c=0;
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
	cout<<"\n\n\n\n";
	  for(i=1; i<=n; i++){
		for(j=1; j<=n; j++){
			cout<<a[n][i][j]<<" ";
		}
		cout<<endl;
	}
	for(i=1; i<=n; i++){
        for(j=1; j<=n; j++){
            if(a[n][i][j]!=0){
                a[n][i][j]=1;
            }
        }
	}
	cout<<"\n\n\n\n";
	  for(i=1; i<=n; i++){
		for(j=1; j<=n; j++){
			cout<<a[n][i][j]<<" ";
		}
		cout<<endl;
	}
	cout<<"\n\n\n\n";
	  for(i=1; i<=n; i++){
		for(j=1; j<=n; j++){
			if(a[n][i][j]==0){
                cout<<"Not strongly connected "<<endl;
                return 1;
			}
		}
	}
	cout<<"strongly connected"<<endl;
	return 0;
}
/*(input) n=
4
1 0 1 0
0 1 1 1
1 0 0 0
1 1 1 1
*/

/*
output

5 0 3 0
16 8 14 8
3 0 2 0
19 8 16 8




1 0 1 0
1 1 1 1
1 0 1 0
1 1 1 1
*/
