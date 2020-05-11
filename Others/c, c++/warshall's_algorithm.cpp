#include<iostream>
using namespace std;
int main()
{
	int a[10][10],k,i,j,n;
	cout<<"n = ";
	cin>>n;
	for(i=1; i<=n; i++){
		for(j=1; j<=n; j++){
			cin>>a[i][j];
			if(a[i][j]==0){
             a[i][j]=0;
        }
        else{
            a[i][j]=1;
           }
		}
	}
	for(k=1; k<=n; k++){
        for(i=1; i<=n; i++){
            for(j=1; j<=n; j++){
                a[i][j]=(a[i][j] | (a[i][k] & a[k][j]));

            }
        }
	}
	cout<<"\n\n";
	  for(i=1; i<=n; i++){
		for(j=1; j<=n; j++){
                cout<<a[i][j]<<"  ";
			}
			cout<<endl;
    }
	cout<<"\n\n";
	  for(i=1; i<=n; i++){
		for(j=1; j<=n; j++){
			if(a[i][j]==0){
                cout<<"Not strongly connected "<<endl;
                return 1;
			}
		}
	}
	cout<<"strongly connected"<<endl;

   return 0;
}
/*input
n=
4
1 0 2 0
4 2 4 3
0 1 0 0
3 4 2 6
*/

/*output
1  1  1  1
1  1  1  1
1  1  1  1
1  1  1  1


strongly connected
*/
