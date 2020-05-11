#include<iostream>
#include<bits/stdc++.h>

using namespace std;

int main(){
	int c;
	string s[5]={"Abir","Arup","Noyon","Sobuj"};
	for(int i=0;i<4;i++){
		if(s[i]<="Rahim" && s[i+1]>="Rahim"){
			c=i+1;
			break;
		}
	}
	for(int j=4;j>c;j--){
		s[j]=s[j-1];
	}
	s[c]="Rahim";
	for(int i=0;i<5;i++){
		cout<<s[i]<<endl;
	}
	return 0;
}
