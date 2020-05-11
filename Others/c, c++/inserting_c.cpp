#include<iostream>
using namespace std;

int main(){
	int a[20]={2,5,9,11,23,34,43,45,56,59,65};
	for(int i=11;i>=4;i--){
		a[i+1]=a[i];
	}
	a[4]=99;
	for(int i=0;i<12;i++){
		cout<<a[i]<<endl;
	}
	return 0;
}
