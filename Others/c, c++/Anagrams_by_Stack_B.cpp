//copy link : https://github.com/Hikari9/UVa/blob/master/732%20-%20Anagrams%20by%20Stack.cpp

#include<iostream>
#include<vector>
#include<stack>
using namespace std;
string a, b;
vector<bool> vc;
stack<char> stk;
int i;
void dfs( int x, int y ){
	if( x==a.size() && y==b.size() ){
		cout << (vc[0]?'i':'o');
		for( i=1; i<vc.size(); ++i ){
			cout << ' ' << (vc[i]?'i':'o');
		}
		cout << endl;
		return;
	}
	// push
	if( x<a.size() ){
		vc.push_back(1);
		stk.push(a[x]);
		dfs(x+1,y);
		vc.pop_back();
		stk.pop();
	}
	// pop if possible
	if( !stk.empty() && y<b.size() && stk.top()==b[y] ){
		vc.push_back(0);
		char c = stk.top();
		stk.pop();
		dfs(x,y+1);
		stk.push(c);
		vc.pop_back();
	}
}
int main(){
	while( cin >> a >> b ){
		vc.clear();
		cout << "[\n";
		dfs(0,0);
		cout << "]\n";
	}
}
