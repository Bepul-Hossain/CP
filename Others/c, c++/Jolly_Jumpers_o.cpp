#include<bits/stdc++.h>

using namespace std;
int main(){

    int n,i,a[3100],b[3100];
    while(cin>>n){
        cin>>a[0];
        int k=1;
        for(i=1; i<n; i++){
            cin>>a[i];
            b[k++]=abs(a[i]-a[i-1]);
        }
        sort(b+1,b+k);
        bool ok=true;
          for(i=1; i<n; i++){
            if(b[i]!=i){
                ok=false;
                break;
            }
        }
        if(ok)cout<<"Jolly"<<endl;
        else cout<<"Not jolly"<<endl;
    }
    return 0;
}
