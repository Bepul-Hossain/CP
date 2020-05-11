#include <bits/stdc++.h>
using namespace std;
void rec(int n){
    if(n>0){
        for(int i=0; i<2; i++){
            //cout<<n<<" ";
            n=n-1;
            rec(n);
            cout<<"ok"<<endl;
            rec(n);
            cout<<" sd "<<endl;
        }
    }
}

int main() {
    int n;
    cin>>n;
    rec(n);

    return 0;
}
