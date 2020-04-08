#include <bits/stdc++.h>
using namespace std;

int main()
{
    int i, t;
    long n, s, a;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        cin >> n;
        s = ceil(sqrt(n));
        a = n - (s - 1) * (s - 1);
        if (s % 2 == 0)
        {
            if (a > s)
            {
                cout << "Case " << i << ": " << s << " " << 1 + (s * s) - n << endl;
            }
            else
            {
                cout << "Case " << i << ": " << a << " " << s << endl;
            }
        }
        else
        {
            if (a > s)
            {
                cout << "Case " << i << ": " << 1 + (s * s) - n << " " << s << endl;
            }
            else
            {
                cout << "Case " << i << ": " << s << " " << a << endl;
            }
        }
    }

    return 0;
}