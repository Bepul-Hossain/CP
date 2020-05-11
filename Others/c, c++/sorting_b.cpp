#include<iostream>
using namespace std;

int main(){
	char temp;
	char a[10]={'M','D','N','R','Q','A','Z','T','C','P'};
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

