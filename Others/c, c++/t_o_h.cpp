#include<iostream>
using namespace std;
int c=0;
//tower of HANOI function implementation
void TOH(int n,char Sour, char Aux,char Des){
	if(n==1){
        c++;
		cout<<"Move Disk "<<n<<" from "<<Sour<<" to "<<Des<<endl;
		return;
	}
	TOH(n-1,Sour,Des,Aux);
	c++;
	cout<<"Move Disk "<<n<<" from "<<Sour<<" to "<<Des<<endl;
	TOH(n-1,Aux,Sour,Des);
}

//main program
int main(){
	int n;

	cout<<"Enter no. of disks:";
	cin>>n;
	//calling the TOH
	TOH(n,'A','B','C');
	cout<<"Total Step:"<<c<<endl;

	return 0;
}
