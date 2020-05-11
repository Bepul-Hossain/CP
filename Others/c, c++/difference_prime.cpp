#include<bits/stdc++.h>
#include<cstdio>
using namespace std;
int main()
{
    long long int n,i,k,c=0,j,a[10000];
    scanf("%lld",&n);
    for(i=2;i<=n;i++){
            int f=0;
        if(n%i==0)
        {
            for(k=2;k<=sqrt(i);k++)
            {
                if(i%k==0)
                {
                    f=1;
                    break;
                }
            }
            if(f==0)
                c++;
        }

    }
    cout<<c<<endl;
    return 0;
}
