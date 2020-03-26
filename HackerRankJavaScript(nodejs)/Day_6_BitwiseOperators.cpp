#include <bits/stdc++.h>
using namespace std;

int main()
{
    int q, m, j, n, k, s, s0, arr[1005];
    cin >> q;
    for (j = 0; j < q; j++)
    {
        cin >> n >> k;
        s0 = 0;
        for (int i = 1; i < n; i++)
        {
            for (int m = i + 1; m <= n; m++)
            {
                s = i & (m);
                //cout<<i<<"&"<<m<<" "<<s<<endl;
                if (s < k)
                {
                    if (s > s0)
                    {
                        s0 = s;
                    }
                }
            }
        }
        arr[j] = s0;
    }
    for (j = 0; j < q; j++)
    {
        cout << arr[j] << endl;
    }
    return 0;
}