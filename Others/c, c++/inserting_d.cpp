#include<iostream>
#include<bits/stdc++.h>

using namespace std;

int main(){
	string s[8]={"Abir","Anup","Arup","Bipul","Noyon","Rahim","Sobuj"};
	
	for(int j=7;j>4;j--){
		s[j]=s[j-1];
	}
	s[4]="Karim";
	for(int i=0;i<8;i++){
		cout<<s[i]<<endl;
	}
	return 0;
}
