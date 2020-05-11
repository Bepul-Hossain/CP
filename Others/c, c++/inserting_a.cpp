#include<iostream>
using namespace std;

int main(){
	int c,b[20];
	int a[20]={2,5,9,11,23,34,43,45,56,59,65};
	for(int i=0;i<20;i++){
		if(a[i]<=54 && a[i+1]>=54){
			c=i+1;
			break;
		}
	}
	for(int j=11;j>=c;j--){
		a[j+1]=a[j];
	}
	a[c]=54;
	for(int i=0;i<20;i++){
		cout<<a[i]<<endl;
	}
	return 0;
}
