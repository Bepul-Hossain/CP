#include<bits/stdc++.h>
#define max 100000
using namespace std;

int main()
{

   long long int n, h, a, tn, tc=1;
   cin>>tn;
   while(tn--)
   {
       cin>>n;
       h= ceil(sqrt(n));
       a=n-(h-1)*(h-1);
       if(h%2==0)
       {
           if(a>h) printf("Case %lld: %lld %lld\n", tc++, h, (1+h*h-n));
           else printf("Case %lld: %lld %lld\n", tc++, a, h);
       }
       else
       {
           if(a>h) printf("Case %lld: %lld %lld\n", tc++, (1+h*h-n), h);
           else printf("Case %lld: %lld %lld\n", tc++, h, a);
       }
   }
    return 0;
}
