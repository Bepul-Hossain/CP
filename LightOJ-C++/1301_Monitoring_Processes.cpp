#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main()
{
    int t, ca, n;
    //freopen("input.txt","r",stdin);
    cin >> t;

    for (ca = 1; ca <= t; ca++)
    {
        cin >> n;
        map<ll, int> mp;

        long long a, b;

        for (int i = 0; i < n; i++)
        {
            scanf("%lld %lld", &a, &b);
            mp[a]++;
            mp[b + 1]--;
        }

        int c = 0, mx = 0;
        map<ll, int>::iterator it;
        for (it = mp.begin(); it != mp.end(); it++)
        {
            c += it->second;
            // cout<<c<<endl;
            mx = max(c, mx);
        }
        printf("Case %d: %lld\n", ca, mx);
    }
}
