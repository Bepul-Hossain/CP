#include <iostream>
#include <string>
using namespace std;
int main()
{
    int i, t, n, j, a, b, z, w, c, p[100];
    string s, x, r, d;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        cin >> n;
        w = 0;
        z = 1000000;
        for (j = 1; j <= n; j++)
        {
            cin >> s;
            cin >> a >> b >> c;
            //cout<<s<<a<<b<<c;
            p[j] = a * b * c;
            if (p[j] > w)
            {
                w = p[j];
                r = s;
            }
            if (z > p[j])
            {
                z = p[j];
                x = s;
            }
        }

        if (w > z)
        {
            cout << "Case " << i << ": " << r << " took chocolate from " << x << endl;
        }
        else
        {
            cout << "Case " << i << ": "
                 << "no thief" << endl;
        }
    }

    return 0;
}
