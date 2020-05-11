#include <bits/stdc++.h>
using namespace std;


int main() {

    list<int> a,b;
    a.assign(7,100);
    b.assign(a.begin(),a.end());
    int c[4]={1,3,5,6};
    a.assign(c,c+4);
    cout << a.size() << endl;
    a.emplace_back(4);
    cout<<a.size()<<endl;


    return 0;
}
