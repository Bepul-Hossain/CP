#include <bits/stdc++.h>
using namespace std;

int main() {

    int n,m,dif;
    cin>>n;
    int key, row = n, column =n;
    cin>>key;
    int p=1;
    while(key>p*p){
        p=p+2;
    }
    m = n/2;
    cout<<p<<endl;
    dif = (p*p)-key;
    cout<<" dif "<<dif<<endl;
    switch(dif!=0){
        cout<<dif<<endl;
        case 1:  dif<n;
            cout<<row-dif<<" "<<column<<endl;
            break;
        case 2: dif<(n+n)-2;
            cout<<row<<" "<<column-(dif-n);
            break;
    }

    return 0;
}
