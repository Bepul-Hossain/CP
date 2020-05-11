#include<bits/stdc++.h>
using namespace std;
int main()
{
    string s;
    cin>>s;
    long long n;
    n=bitset<32>(s).to_ulong();
    cout<<n<<endl;

    int m;
    string s1;
    cin>>m;
    s1=bitset<32>(m).to_string();
    cout<<s1<<endl;

    return 0;
}
