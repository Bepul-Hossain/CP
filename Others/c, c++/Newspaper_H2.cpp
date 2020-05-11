#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    //freopen("input.txt", "r", stdin);

    int t;
    cin>>t;
    while(t--){
        map<char,int>mp;
        int k;
        cin>>k;
        char ch; double value;
        while(k--){
            cin>>ch>>value;
            mp[ch] = value;
        }
        int line_number_M;
        cin>>line_number_M;
        cin.ignore();
        //cout<<"no "<<line_number_M<<endl;
        string str;
        double total=0;
        for(int i=0; i<line_number_M; i++){
            str="";
            getline(cin,str);
            //cout<<str<<" ===size = "<<str.size()<<endl;
            for(int j=0; j<str.size(); j++){
                    if(mp[str[j]]){
                        total=total+mp[str[j]];
                    }
            }
        }
        total = total/100;
        printf("%0.2f$\n",total);
        //cout<<total<<"$"<<endl;
        mp.clear();
    }

    return 0;
}

