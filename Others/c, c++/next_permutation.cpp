#include <iostream>
#include <algorithm>
using namespace std;

int main () {
    int i;
    string s;
    cin>>s;
    for(i=0; i<s.size(); i++){
    next_permutation(s.begin(), s.end());
    cout<<s<<endl;
    }
    return 0;
}
