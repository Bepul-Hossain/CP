#include<bits/stdc++.h>
using namespace std;
int main()
{
    //convert binary string digit to decimal numbet

    string s;
    cin>>s;
    long long n;
    n=bitset<32>(s).to_ulong();
    cout<<n<<endl;

    //convert decimal number to string

    int i;
    cin>>i;
    string p;
    p=bitset<30>(i).to_string();
    cout<<p<<endl;

    return 0;
}
