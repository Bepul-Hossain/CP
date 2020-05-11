#include<iostream>
using namespace std;

int main(){
	int temp,l=0,u=49,m,loc=-1;;
	int a[50]={19,2,3,5,6,37,8,9,7,4,8,4,5,1,22,63,55,2,41,25,15,47,27,68,14,7,8,58,98,96,97,99,78,88,72,18,27,14,12,53,77,57,17,40,71,4,32,5,44,54,};
	for(int i=0;i<=50;i++){
		for(int j=0;j<50;j++){
			if(a[i]>a[j]){
				temp=a[i];
				a[i]=a[j];
				a[j]=temp;
			}
		}
	}
	while(l<u){
		m=u/2;
		if(a[m]==77){
			loc=m+1;
			break;
		}
		else if(a[m]<77){
			
		}
	}
	
}
