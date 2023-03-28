#include <iostream>
using namespace std;
int main()
{
    int t, n, p, a, q, sum, g[30], j, i, k;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        cin >> n >> p >> q;
        sum = 0;
        k = 0;
        for (j = 1; j <= n; j++)
        {
            cin >> g[j];
            sum = sum + g[j];
            if (sum <= q)
            {
                k = j;
            }
        }
        if (n > p)
        {
            a = p;
        }
        else
        {
            a = n;
        }
        if (a < k)
        {
            cout << "Case " << i << ": " << a << endl;
        }
        else
        {
            cout << "Case " << i << ": " << k << endl;
        }
    }
    return 0;
}
