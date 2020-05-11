#include <bits/stdc++.h>
using namespace std;

int main() {

    freopen("input.txt", "r", stdin);

    int t;
    scanf("%d",&t);
    map<char,int>mp;
    char ch,c[102];
    double value;

    while(t--){
        int k;
        scanf("%k",&k);
        for(int i=0; i<k; i++){
            scanf("%c,%d",&ch,&value);
            c[i]=ch;
            mp[ch] = value;
        }
        int line_number;
        scanf("%d",&line_number);
        cin.ignore();
        cout<<"no "<<line_number<<endl;
        string str;
        double total=0;
        for(int i=0; i<line_number; i++){
            str="";
            getline(cin,str);
            cout<<str<<" ===size = "<<str.size()<<endl;
            for(int j=0; j<str.size(); j++){
                for(int i=0; i<k; i++){
                    if(str[j]==c[i]){
                        total=total+mp[c[i]];
                    }
                }
            }
        }
        total = total/100;
        printf("%.2lf$\n",total);
        cout<<total<<"$"<<endl;
        mp.clear();
    }

    return 0;
}
