#include<iostream>

using namespace std;


int main(){
    int tree[100]={0},i,value,item;

	while(1){
		cin>>i>>value;
		if(i==0 && value==0)
			break;
		tree[i]=value;
	}
	int ptr,save=0,loc,par;
	//Inserting
	cout<<"Enter which item do you want to insert or search:\n";
	cin>>item;
	ptr=1;
	if(tree[1]==0){
        loc=0;
        //par=0;
	}
	else{
	    while(tree[ptr]!=0){
            if(tree[ptr]==item){
                loc=ptr;
               // par=save;
                cout<<"Item found in Location "<<loc;
                return -1;
            }
            if(item<tree[ptr]){
               // save=ptr;
                ptr=2*ptr;
            }
            else{
               // save=ptr;
                ptr=2*ptr+1;
            }
        }
        tree[ptr]=item;
        loc=ptr;
       // par=save;
        cout<<"Not found\n Insert in location "<<loc<<endl;
	}
	return 0;

}
/*
1 38
2 14
4 8
5 23
10 18
21 21
3 56
6 45
7 82
14 70
0 0
*/
