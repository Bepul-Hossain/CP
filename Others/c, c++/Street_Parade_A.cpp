#include <bits/stdc++.h>
using namespace std;
stack<int>stk;

int main() {

    int n;

    while(scanf("%d",&n)!=0){
        int a[n],b[n],i,seq=1,c;

        for( i=1; i<=n; i++){
            scanf("%d",&b[i]);
        }

        for( i=1; i<=n; i++){
            if(b[i]==seq){
                seq++;
                a[seq]=b[i];
            }
            else{
                stk.push(b[i]);
            }
        }

        while(!stk.empty()){
            c = stk.top();
            seq++;
            if(seq == c){
                a[c] = c ;
                stk.pop();
            }
            else{
                cout<<"NO"<<endl;
                return 0;
            }
        }
        cout<<"YES"<<endl;
    }
    return 0;
}
