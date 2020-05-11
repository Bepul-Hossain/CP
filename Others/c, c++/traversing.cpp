#include<iostream>
#include<cmath>

using namespace std;
int main(){
	int sum=0,max,min;
	double avg,sine[10];
	int arr[10]={90,23,34,7,15,26,18,5,19,28};
	max=arr[0];
	min=arr[0];
	for(int i=0;i<10;i++){
		sum+=arr[i];
		if(max<arr[i])
			max=arr[i];
		if(min>arr[i])
			min=arr[i];
		sine[i]=sin(arr[i]);
	}
	avg=(double)sum/10;
	cout<<"Total="<<sum<<endl;
	cout<<"Maximum="<<max<<endl;
	cout<<"Minimum="<<min<<endl;
	cout<<"Average="<<avg<<endl;
	cout<<"Sine Value:"<<endl;
	for(int i=0;i<10;i++){
		cout<<"sin("<<arr[i]<<")="<<sine[i]<<endl;
	}
	return 0;
}
