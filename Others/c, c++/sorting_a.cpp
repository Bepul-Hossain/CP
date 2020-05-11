#include<iostream>
using namespace std;

int main(){
	int temp;
	int a[10]={99,8,78,45,4,12,31,25,11,50};
	for(int i=0;i<10;i++){
		for(int j=i+1;j<10;j++){
			if(a[i]>a[j]){
				temp=a[i];
				a[i]=a[j];
				a[j]=temp;
			}
		}
	}
	for(int i=0;i<10;i++){
		cout<<a[i]<<" ";
	}
	cout<<endl;
	return 0;
}

