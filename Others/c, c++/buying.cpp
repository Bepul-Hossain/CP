#include<iostream>
using namespace std;
int main()
{
	int n,m,k,s[100],i,j,coun=0,l,countt=0;
	cin>>n>>m>>k;
	for(i=1; i<=n; i++){
	 cin>>s[i];
	}
	for(j=m-1; j>=1; j--){
		if(k<=s[j]){
		coun=coun+1;
		cout<<coun<<endl;
		}
		else{break;}


	}
	for(l=m+1; l<=n; l++){
		if(k<=s[l]){
		coun=countt+1;
		}else{break;}

	}
	if(coun>countt){
	   cout<<countt*10<<endl;
	}
	else{
		cout<<coun*10<<endl;
		}

	return 0;
}

