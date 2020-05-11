#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
	int a[10][10],k,i,j,n,m;
	cout<<"n = ";
	cin>>n;
	for(i=1; i<=n; i++){
		for(j=1; j<=n; j++){
			cin>>a[i][j];
		}
	}
	char s;
	cout<<"find adjacent = ";
	cin>>s;
	m=s-64;
	cout<<" is  ";
	for(i=1; i<=n; i++){
        if(a[m][i]!=0){
          cout<<char(64+i)<<" ";
        }
	}
   return 0;
}
/*input
n =  4
1 0 2 0
4 2 4 3
0 1 0 0
3 4 2 6
find adjacent = B
(output) is  A B C D
*/
